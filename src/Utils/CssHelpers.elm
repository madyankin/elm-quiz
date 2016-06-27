module Utils.CssHelpers exposing (..)

import String exposing (join)
import Html exposing (Attribute)
import Html.Attributes exposing (class)
import Css.Helpers exposing (toCssIdentifier)


namespacedClass : String -> a -> List String -> Attribute message
namespacedClass namespace prefixedClass otherClasses =
    (namespace ++ toCssIdentifier prefixedClass)
        :: otherClasses
        |> join " "
        |> class
