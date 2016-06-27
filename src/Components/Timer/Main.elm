module Components.Timer.Main exposing (..)

import Html exposing (..)
import String exposing (padLeft)


view : Bool -> Int -> Html message
view showCaption time =
    let
        minutes =
            toString (time // 60) |> padLeft 2 '0'

        seconds =
            rem time 60 |> toString |> padLeft 2 '0'

        caption =
            if showCaption then
                "Время: "
            else
                ""
    in
        text (caption ++ minutes ++ ":" ++ seconds)
