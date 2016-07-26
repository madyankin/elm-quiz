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
            [ paddingRight (px 10)
            ]
        , (.) Hide
            [ position absolute
            , top (px 10)
            , right (px 15)
            , padding zero
            , color (hex "000") |> important
            , backgroundColor transparent |> important
            , hover
                [ color (hex "546e7a") |> important
                ]
            ]
        , (.) Next
            [ display inlineBlock |> important
            , marginTop (px 10)
            , padding zero |> important
            , backgroundColor transparent |> important
            , color (hex "039be5") |> important
            , hover
                [ color (hex "64b5f6") |> important
                ]
            ]
        ]
