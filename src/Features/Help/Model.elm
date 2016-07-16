module Features.Help.Model exposing (..)

import List exposing (member)
import Features.Help.Hints exposing (..)


type HelpHint
    = HomeMenu
    | QuizMenu
    | QuizStatus
    | QuizCard
    | ResultMessage
    | ResultMenu
    | ResultTable


type alias Model =
    { show : Bool
    , currentHint : Maybe HelpHint
    , shownHints : List HelpHint
    }


init : Model
init =
    { show = False
    , currentHint = Nothing
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


disableHints : Model
disableHints =
    { init | show = False }


enableHints : Model
enableHints =
    { init | show = True }


hint : HelpHint -> String
hint helpHint =
    case helpHint of
        QuizMenu ->
            quizMenu

        _ ->
            ""
