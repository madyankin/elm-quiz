module Features.Help.Styles exposing (..)

import List exposing (append)
import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers


type CssClasses
    = Container
    | Hint
    | Hide
    | Next


namespace : String
namespace =
    "Help"


namespacedClass : CssClasses -> List String -> Attribute message
namespacedClass class otherClasses =
    let
        defaultClasses =
            []
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


css : List Snippet
css =
    Css.Namespace.namespace namespace
        []
