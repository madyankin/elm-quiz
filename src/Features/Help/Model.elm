module Features.Help.Model exposing (..)

import Set
import List exposing (member)
import Types exposing (Position, Help, HelpHint(..), HelpModel)
import Features.Help.Hints exposing (..)


type alias Model =
    { show : Bool
    , currentHint : Maybe HelpHint
    , shownHints : List HelpHint
    }


init : Maybe HelpHint -> Model
init hint =
    { show = True
    , currentHint = hint
    , shownHints = []
    }


showHintSet : Model -> List HelpHint -> Model
showHintSet model hints =
    case hints of
        [] ->
            model

        hint :: restHints ->
            if member hint model.shownHints then
                showHintSet model restHints
            else
                showHint model hint


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
    case model.currentHint of
        Just hint ->
            { model
                | currentHint = Nothing
                , shownHints = hint :: model.shownHints
            }

        Nothing ->
            model


disableHelp : Model
disableHelp =
    { show = False, currentHint = Nothing, shownHints = [] }


enableHelp : Model
enableHelp =
    { show = True, currentHint = Just HomeMenuHint, shownHints = [] }


allHintsShown : Model -> Bool
allHintsShown model =
    let
        shownHints =
            model.shownHints
                |> List.map toString
                |> Set.fromList

        allHints =
            [ HomeMenuHint
            , QuizMenuHint
            , QuizStatusHint
            , QuizCardHint
            , ResultTableHint
            ]
                |> List.map toString
                |> Set.fromList
    in
        shownHints == allHints


hint : HelpHint -> String
hint helpHint =
    case helpHint of
        HomeMenuHint ->
            homeMenu

        QuizMenuHint ->
            quizMenu

        QuizStatusHint ->
            quizStatus

        QuizCardHint ->
            quizCard

        ResultTableHint ->
            resultTable
