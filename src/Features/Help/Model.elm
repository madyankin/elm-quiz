module Features.Help.Model exposing (..)

import Html exposing (Html)
import List exposing (member)
import Features.Help.Hints exposing (..)


type alias Help message =
    HelpHint -> Maybe HelpHint -> Html message


type HelpHint
    = HomeMenuHint
    | QuizMenuHint
    | QuizStatusHint
    | QuizCardHint
    | ResultMessageHint
    | ResultMenuHint
    | ResultTableHint


type alias Model =
    { show : Bool
    , currentHint : Maybe HelpHint
    , shownHints : List HelpHint
    }


init : Maybe HelpHint -> Model
init hint =
    { show = False
    , currentHint = hint
    , shownHints = []
    }


showHint : Model -> HelpHint -> Model
showHint model hint =
    if member hint model.shownHints then
        model
    else
        { model
            | shownHints = hint :: model.shownHints
            , currentHint = Just hint
        }


hideHint : Model -> Model
hideHint model =
    { model | currentHint = Nothing }


disableHints : Model -> Model
disableHints model =
    { model | show = False }


enableHints : Model -> Model
enableHints model =
    { model | show = True }


hint : HelpHint -> String
hint helpHint =
    case helpHint of
        HomeMenuHint ->
            homeMenu

        QuizMenuHint ->
            quizMenu

        _ ->
            ""
