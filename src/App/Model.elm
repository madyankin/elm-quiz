module App.Model exposing (..)

import App.Routing exposing (Route(..), routeFromResult)
import Features.Quiz.Model as Quiz
import Features.Result.Model as Result
import Features.ResultsList.Model as ResultsList


type alias Model =
    { route : Route
    , quiz : Quiz.Model
    , result : Result.Model
    , resultsList : ResultsList.Model
    }


init : Result String Route -> ( Model, Cmd msg )
init result =
    let
        model =
            { route = routeFromResult result
            , quiz = Quiz.init
            , result = Result.init
            , resultsList = ResultsList.init
            }
    in
        ( model, Cmd.none )
