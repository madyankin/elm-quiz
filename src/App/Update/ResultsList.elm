module App.Update.ResultsList exposing (..)

import Utils.Commands exposing (sendMessage)
import App.Model exposing (..)
import App.Messages exposing (..)
import App.Routing exposing (Route(..), navigateTo)
import Features.ResultsList.Update as ResultsList
import Features.ResultsList.Messages as ResultsListMessages
import Features.ResultsList.Model exposing (resultById)


updateResultsList : ResultsListMessages.Message -> Model -> ( Model, Cmd Message )
updateResultsList message model =
    let
        ( resultsList, command ) =
            ResultsList.update message model.resultsList

        taggedCommand =
            Cmd.map ResultsListMessage command

        finalCommand =
            case message of
                ResultsListMessages.OpenQuiz ->
                    navigateTo Quiz


                ResultsListMessages.Close ->
                    Cmd.batch [ taggedCommand, navigateTo Home ]

                ResultsListMessages.ShowResult id ->
                    let
                        successCommand result =
                            Cmd.batch
                                [ taggedCommand
                                , navigateTo (Result id)
                                ]
                    in
                        resultById id resultsList
                            |> Maybe.map successCommand
                            |> Maybe.withDefault taggedCommand

                ResultsListMessages.HelpMessage message ->
                    sendMessage (HelpMessage message)

                _ ->
                    taggedCommand
    in
        ( { model | resultsList = resultsList }, finalCommand )
