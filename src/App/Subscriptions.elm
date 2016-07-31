module App.Subscriptions exposing (..)

import App.Messages exposing (..)
import App.Model exposing (..)
import App.Routing as Routing
import Features.Quiz.Subscriptions as Quiz
import Features.Quiz.Messages as QuizMessages
import Features.ResultsList.Subscriptions as ResultsList
import Features.Help.Subscriptions as Help


mapQuizMessages : Model -> QuizMessages.Message -> Message
mapQuizMessages model message =
    if model.route == Routing.Quiz then
        QuizMessage message
    else
        NoOp


subscriptions : Model -> Sub Message
subscriptions model =
    Sub.batch
        [ Sub.map (mapQuizMessages model) Quiz.subscriptions
        , Sub.map ResultsListMessage ResultsList.subscriptions
        , Sub.map HelpMessage Help.subscriptions
        ]
