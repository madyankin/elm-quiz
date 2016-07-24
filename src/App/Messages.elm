module App.Messages exposing (..)

import Types
import Features.Home.Messages as Home
import Features.Quiz.Messages as Quiz
import Features.Result.Messages
import Features.ResultsList.Messages as ResultsList


type Message
    = NoOp
    | HomeMessage Home.Message
    | QuizMessage Quiz.Message
    | ResultMessage Features.Result.Messages.Message
    | ResultsListMessage ResultsList.Message
    | HelpMessage Types.HelpMessage
