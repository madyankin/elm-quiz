module Features.Result.Messages exposing (..)

import Features.Result.Model as Result


type Message
    = NoOp
    | Open Result.Model
    | Close
