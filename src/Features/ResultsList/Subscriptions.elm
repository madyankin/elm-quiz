port module Features.ResultsList.Subscriptions exposing (..)

import Json.Encode exposing (Value, null)
import Features.ResultsList.Decode exposing (..)
import Features.ResultsList.Messages exposing (..)


port results : (Maybe Value -> msg) -> Sub msg


port setResults : Value -> Cmd msg


mapResults : Maybe Value -> Message
mapResults value =
    value
        |> Maybe.withDefault null
        |> fromJson
        |> SetResults


subscriptions : Sub Message
subscriptions =
    results mapResults
