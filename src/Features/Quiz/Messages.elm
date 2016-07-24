module Features.Quiz.Messages exposing (..)

import Array exposing (Array)
import Time exposing (Time)
import Types


type Message
    = NoOp
    | Start
    | SetStartTime
    | Finish Types.Result
    | Cancel
    | NextCard
    | PrevCard
    | Answer Types.AnswerIndex
    | IncrementTimer
    | ToggleHint
    | SetDate Time
    | InitAnswers (Array Types.CardId)
    | HelpMessage Types.HelpMessage
