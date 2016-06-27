module App.Update exposing (..)

import Debug
import App.Model exposing (..)
import App.Messages exposing (..)
import App.Update.Home exposing (..)
import App.Update.Quiz exposing (..)
import App.Update.ResultsList exposing (..)
import App.Update.Result exposing (..)


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    let
        _ =
            if message == NoOp then
                message
            else
                Debug.log "update" message
    in
        case message of
            HomeMessage homeMessage ->
                updateHome homeMessage model

            QuizMessage quizMessage ->
                updateQuiz quizMessage model

            ResultsListMessage resultsListMessage ->
                updateResultsList resultsListMessage model

            ResultMessage resultMessage ->
                updateResult resultMessage model

            _ ->
                ( model, Cmd.none )
