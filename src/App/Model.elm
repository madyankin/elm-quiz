module App.Model exposing (..)

import Types exposing (HelpHint(..))
import App.Routing exposing (Route(..), routeFromResult, navigateTo)
import Features.Quiz.Model as Quiz
import Features.Result.Model as Result
import Features.ResultsList.Model as ResultsList
import Features.Help.Model as Help


type alias Model =
    { route : Route
    , quiz : Quiz.Model
    , result : Result.Model
    , resultsList : ResultsList.Model
    , help: Help.Model
    }


init : Result String Route -> ( Model, Cmd msg )
init result =
    let
        model =
            { route = routeFromResult result
            , quiz = Quiz.init
            , result = Result.init
            , resultsList = ResultsList.init
            , help = Help.init (Just HomeMenuHint)
            }
    in
        ( model, Cmd.none )
