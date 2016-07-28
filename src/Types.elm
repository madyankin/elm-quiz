module Types exposing (..)

import Date exposing (Date)
import Array exposing (Array)
import Html exposing (Html)


type alias CardId =
    Int


type alias CardIndex =
    Int


type alias AnswerIndex =
    Int


type alias ResultId =
    Int


type alias Card =
    { id : CardId
    , imageName : Maybe String
    , question : String
    , hint : String
    , correctAnswer : AnswerIndex
    , answers : List String
    }


type alias Answer =
    { card : CardId
    , answer : Maybe AnswerIndex
    }


type alias Result =
    { answers : Array Answer
    , elapsedTime : Int
    , date : Date
    }


type PositionSide
    = Top
    | Right
    | Bottom
    | Left


type alias Position =
    List ( PositionSide, Int )


type HelpHint
    = HomeMenuHint
    | QuizMenuHint
    | QuizStatusHint
    | QuizCardHint
    | ResultTableHint


type alias Help message =
    HelpHint -> Maybe HelpHint -> Position -> Html message


type HelpMessage
    = ShowHint HelpHint
    | HideHint
    | EnableHints
    | DisableHints
