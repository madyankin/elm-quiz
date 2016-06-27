module Features.ResultsList.Model exposing (..)

import Array exposing (Array, push, get, length, empty)
import Types


type alias Model =
    Array Types.Result


init : Model
init =
    empty


add : Types.Result -> Model -> Model
add result model =
    push result model


resultById : Types.ResultId -> Model -> Maybe Types.Result
resultById id model =
    get id model


nextId : Model -> Types.ResultId
nextId model =
    length model
