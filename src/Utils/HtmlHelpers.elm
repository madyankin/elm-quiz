module Utils.HtmlHelpers exposing (..)

import Html exposing (Attribute)
import Html.Attributes exposing (href)


void : Attribute message
void =
    href "javascript:void(0)"
