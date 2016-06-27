module Components.Header.Styles exposing (..)

import List exposing (append)
import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers


type CssClasses
    = Menu
    | Left
    | Right


namespace : String
namespace =
    "Header"


namespacedClass : CssClasses -> List String -> Attribute message
namespacedClass class otherClasses =
    let
        defaultClasses =
            case class of
                Menu ->
                    [ "header-menu", "nav-wrapper", "white" ]

                Left ->
                    [ "left" ]

                Right ->
                    [ "right" ]
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


css : List Snippet
css =
    Css.Namespace.namespace namespace
        [ (.) Menu
            [ position relative
            , height (px 56) |> important
            ]
        ]
