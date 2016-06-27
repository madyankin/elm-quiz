module Features.Result.Decode exposing (..)

import Date exposing (Date)
import Json.Decode exposing (..)
import Json.Decode.Extra exposing ((|:))
import Types exposing (Answer)
import Features.Result.Model exposing (Model, init)


modelDecoder : Decoder Model
modelDecoder =
    succeed Model
        |: ("answers" := array answerDecoder)
        |: ("elapsedTime" := int)
        |: ("date" := dateDecoder)


dateDecoder : Decoder Date
dateDecoder =
  map Date.fromTime float


answerDecoder : Decoder Answer
answerDecoder =
    succeed Answer
        |: ("card" := int)
        |: ("answer" := maybe int)


fromJson : Value -> Model
fromJson json =
    case decodeValue modelDecoder json of
        Ok model ->
            model

        Err message ->
            init
