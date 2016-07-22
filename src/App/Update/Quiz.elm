module App.Update.Quiz exposing (..)

import Utils.Commands exposing (..)
import App.Model exposing (..)
import App.Messages exposing (..)
import App.Routing exposing (Route(..), navigateTo)
import Features.Quiz.Messages as QuizMessages
import Features.Quiz.Update as Quiz
import Features.ResultsList.Messages as ResultsListMessages
import Features.ResultsList.Model exposing (nextId)


updateQuiz : QuizMessages.Message -> Model -> ( Model, Cmd Message )
updateQuiz message model =
    let
        ( quiz, command ) =
            Quiz.update message model.quiz

        taggedCommand =
            Cmd.map QuizMessage command

        finalCommand =
            case message of
                QuizMessages.Cancel ->
                    Cmd.batch [ taggedCommand, navigateTo Home ]

                QuizMessages.Finish result ->
                    Cmd.batch
                        [ taggedCommand
                        , sendMessage <| ResultsListMessage (ResultsListMessages.AddResult result)
                        , navigateTo <| Result (nextId model.resultsList)
                        ]

                QuizMessages.HelpMessage message ->
                    sendMessage (HelpMessage message)

                _ ->
                    taggedCommand
    in
        ( { model | quiz = quiz }, finalCommand )
