module Features.ResultsList.Encode exposing (toJson)

import Array exposing (Array, map)
import Json.Encode exposing (..)
import Features.Result.Encode as Result
import Features.ResultsList.Model exposing (Model)


toJson : Model -> Value
toJson model =
    model
        |> map Result.toJson
        |> array
