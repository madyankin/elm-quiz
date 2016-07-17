module App.Update.Home exposing (..)

import Utils.Commands exposing (sendMessage)
import App.Model exposing (..)
import App.Messages exposing (..)
import App.Routing exposing (Route(..), navigateTo)
import Features.Home.Messages as HomeMessages


updateHome : HomeMessages.Message -> Model -> ( Model, Cmd Message )
updateHome message model =
    case message of
        HomeMessages.OpenQuiz ->
            ( model, navigateTo Quiz )

        HomeMessages.OpenResultsList ->
            ( model, navigateTo ResultsList )

        HomeMessages.HelpMessage message ->
            ( model, sendMessage (HelpMessage message) )
