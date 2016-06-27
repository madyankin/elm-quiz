module Utils.Keyboard exposing (..)

import Char exposing (KeyCode)


type Key
    = Escape
    | LeftArrow
    | RightArrow
    | Number1
    | Number2
    | Number3
    | Number4
    | Number5
    | UnknownKey


codeToKey : KeyCode -> Key
codeToKey code =
    case code of
        27 -> Escape
        37 -> LeftArrow
        39 -> RightArrow
        49 -> Number1
        50 -> Number2
        51 -> Number3
        52 -> Number4
        53 -> Number5
        _ -> UnknownKey
