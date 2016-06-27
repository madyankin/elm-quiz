module Utils.Events exposing (onClick)

import Json.Decode exposing (succeed)
import Html exposing (Attribute)
import Html.Events exposing (Options, onWithOptions)


messageOn : String -> Options -> message -> Attribute message
messageOn name options message =
    onWithOptions name options (succeed message)


noBubble : Options
noBubble =
    { stopPropagation = True
    , preventDefault = True
    }


onClick : message -> Attribute message
onClick =
    messageOn "click" noBubble
