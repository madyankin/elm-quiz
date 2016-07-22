module Features.Quiz.Messages exposing (..)

import Array exposing (Array)
import Time exposing (Time)
import Types
import Features.Help.Messages as HelpMessages


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
    | HelpMessage HelpMessages.Message
