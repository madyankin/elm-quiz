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


view : Model -> Html Message
view model =
    page model


page : Model -> Html Message
page model =
    case model.route of
        Home ->
            App.map HomeMessage HomeView.view

        Quiz ->
            App.map QuizMessage (QuizView.view model.quiz)

        Result id ->
            App.map ResultMessage (ResultView.view model.result)

        ResultsList ->
            App.map ResultsListMessage (ResultsListView.view model.resultsList)

        NotFound ->
            App.map HomeMessage HomeView.view
