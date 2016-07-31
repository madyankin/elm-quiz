module Features.Help.Encode exposing (toJson)

import Array exposing (Array)
import Types exposing (HelpHint(..))
import Json.Encode exposing (..)
import Features.Help.Model exposing (Model)


currentHint : Maybe HelpHint -> Value
currentHint hint =
    hint
        |> Maybe.map (toString >> string)
        |> Maybe.withDefault null


shownHints : List HelpHint -> Value
shownHints answers =
    answers
        |> Array.fromList
        |> Array.map (toString >> string)
        |> array


toJson : Model -> Value
toJson model =
    object
        [ ( "show", bool model.show )
        , ( "currentHint", currentHint model.currentHint )
        , ( "shownHints", shownHints model.shownHints )
        ]
