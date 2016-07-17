module Features.Home.Messages exposing (..)

import Features.Help.Messages as HelpMessages


type Message
    = OpenQuiz
    | OpenResultsList
    | HelpMessage HelpMessages.Message
