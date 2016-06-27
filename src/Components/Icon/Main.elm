module Components.Icon.Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)


view : String -> Html message
view name =
    i [ class "material-icons" ] [ text name ]
