module App.Messages exposing (..)

import Features.Home.Messages as Home
import Features.Quiz.Messages as Quiz
import Features.Result.Messages
import Features.ResultsList.Messages as ResultsList
import Features.Help.Messages as Help


type Message
    = NoOp
    | HomeMessage Home.Message
    | QuizMessage Quiz.Message
    | ResultMessage Features.Result.Messages.Message
    | ResultsListMessage ResultsList.Message
    | HelpMessage Help.Message
