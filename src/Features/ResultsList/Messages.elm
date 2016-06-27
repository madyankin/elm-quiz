module Features.ResultsList.Messages exposing (..)

import Types
import Features.ResultsList.Model exposing (..)


type Message
    = Close
    | AddResult Types.Result
    | ShowResult Types.ResultId
    | SetResults Model
