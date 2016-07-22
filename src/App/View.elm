module App.View exposing (view)

import Html.App as App
import Html exposing (..)
import App.Messages exposing (..)
import App.Model exposing (..)
import App.Routing exposing (..)
import Features.Home.View as HomeView
import Features.Quiz.View as QuizView
import Features.Result.View as ResultView
import Features.ResultsList.View as ResultsListView
import Features.Help.View as HelpView


view : Model -> Html Message
view model =
    page model


page : Model -> Html Message
page model =
    let
        help =
            HelpView.view model.help
    in
        case model.route of
            Home ->
                App.map HomeMessage (HomeView.view help)

            Quiz ->
                App.map QuizMessage (QuizView.view model.quiz help)

            Result id ->
                App.map ResultMessage (ResultView.view model.result)

            ResultsList ->
                App.map ResultsListMessage (ResultsListView.view model.resultsList)

            NotFound ->
                App.map HomeMessage (HomeView.view help)
