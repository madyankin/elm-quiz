module App.Update.Routing exposing (..)

import Utils.Commands exposing (..)
import Types exposing (HelpHint(..), HelpMessage(..))
import App.Routing exposing (..)
import App.Messages exposing (..)
import App.Model exposing (..)
import Features.Quiz.Messages as QuizMessages
import Features.Result.Messages as ResultMessages
import Features.ResultsList.Model exposing (resultById)
import Features.ResultsList.Model exposing (resultById)


openResult : Types.Result -> Cmd Message
openResult result =
    sendMessage (ResultMessage (ResultMessages.Open result))


showHintSet : List HelpHint -> Cmd Message
showHintSet hints =
    sendMessage (HelpMessage (Types.ShowHintSet hints))


update : Result String Route -> Model -> ( Model, Cmd Message )
update result model =
    let
        route =
            routeFromResult result

        command =
            case route of
                Home ->
                    showHintSet [ HomeMenuHint ]

                Quiz ->
                    Cmd.batch
                        [ sendMessage (QuizMessage QuizMessages.Start)
                        , showHintSet [ QuizMenuHint, QuizStatusHint, QuizCardHint ]
                        ]

                Result id ->
                    resultById id model.resultsList
                        |> Maybe.map openResult
                        |> Maybe.withDefault (navigateTo ResultsList)

                ResultsList ->
                    showHintSet [ ResultTableHint ]

                _ ->
                    Cmd.none
    in
        ( { model | route = route }, command )
