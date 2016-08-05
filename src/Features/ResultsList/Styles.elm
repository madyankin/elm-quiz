module Features.ResultsList.Styles exposing (..)

import List exposing (append)
import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers
import Components.Header.Styles as Header


type CssClasses
    = Container
    | Results
    | Table
    | Row
    | Cell
    | Success
    | Failure


namespace : String
namespace =
    "ResultsList"


namespacedClass : CssClasses -> List String -> Attribute message
namespacedClass class otherClasses =
    let
        defaultClasses =
            case class of
                Results ->
                    [ "container" ]

                Table ->
                    [ "striped" ]

                _ ->
                    []
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


featureCss : List Snippet
featureCss =
    Css.Namespace.namespace namespace
        [ (.) Results
            [ position relative
            ]
        , (.) Table
            [ margin2 (px 40) auto
            , backgroundColor (hex "fff")
            ]
        , (.) Row
            [ hover
                [ backgroundColor (hex "4db6ac") |> important
                ]
            ]
        , (.) Cell
            [ padding2 (px 10) (px 20)
            ]
        , (.) Failure
            [ color (hex "f44336")
            ]
        , (.) Success
            [ color (hex "4caf50")
            ]
        ]


css : List Snippet
css =
    List.concat
        [ Header.css
        , featureCss
        ]
