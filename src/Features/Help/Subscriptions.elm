port module Features.Help.Subscriptions exposing (..)

import Json.Encode exposing (Value, null)
import Types exposing (HelpMessage(..))
import Features.Help.Decode exposing (..)


port help : (Maybe Value -> message) -> Sub message


port setHelp : Value -> Cmd message


mapHelp : Maybe Value -> HelpMessage
mapHelp value =
    value
        |> Maybe.withDefault null
        |> fromJson
        |> SetHelp


subscriptions : Sub HelpMessage
subscriptions =
    help mapHelp
