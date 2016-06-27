module Features.ResultsList.Decode exposing (fromJson)

import Json.Decode exposing (..)
import Features.Result.Decode as Result
import Features.ResultsList.Model exposing (Model, init)


modelDecoder : Decoder Model
modelDecoder =
    array Result.modelDecoder


fromJson : Value -> Model
fromJson json =
    case decodeValue modelDecoder json of
        Ok model ->
            model

        Err message ->
            init
