module App.View exposing (view)

import Html.App as App
import Html exposing (..)
import App.Messages exposing (..)
import App.Model exposing (..)
import App.Routing exposing (..)
import App.Help
import Features.Home.View as HomeView
import Features.Home.Messages as HomeMessages
import Features.Quiz.View as QuizView
import Features.Quiz.Messages as QuizMessages
import Features.Result.View as ResultView
import Features.ResultsList.View as ResultsListView


view : Model -> Html Message
view model =
    page model


page : Model -> Html Message
page model =
    let
        help =
            App.Help.help model.help
    in
        case model.route of
            Home ->
                help HomeMessages.HelpMessage
                    |> HomeView.view
                    |> App.map HomeMessage

            Quiz ->
                help QuizMessages.HelpMessage
                    |> QuizView.view model.quiz
                    |> App.map QuizMessage

            Result id ->
                model.result
                    |> ResultView.view
                    |> App.map ResultMessage

            ResultsList ->
                model.resultsList
                    |> ResultsListView.view
                    |> App.map ResultsListMessage

            NotFound ->
                help HomeMessages.HelpMessage
                    |> HomeView.view
                    |> App.map HomeMessage
