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
            case class of
                Container ->
                    [ "card-panel yellow lighten-4" ]

                _ ->
                    []
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


css : List Snippet
css =
    Css.Namespace.namespace namespace
        [ (.) Container
            [ position absolute
            , width (px 350)
            , textAlign left
            , color (hex "000")
            , lineHeight (px 21)
            ]
        , (.) Hint
            [ marginBottom (px 10)
            ]
        , (.) Hide
            [ position absolute
            , top (px 10)
            , right (px 15)
            , padding zero
            , color (hex "000")
            ]
        ]
