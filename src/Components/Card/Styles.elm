module Components.Card.Styles exposing (..)

import List exposing (append)
import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers
import Components.AnswerList.Styles as AnswerList


type CssClasses
    = ReadOnlyCard
    | HelpIcon
    | Container
    | Card
    | Action
    | Button
    | Hint
    | StaticHint
    | HintContent
    | Title
    | Content
    | Image


namespace : String
namespace =
    "Card"


namespacedClass : CssClasses -> List String -> Attribute message
namespacedClass class otherClasses =
    let
        defaultClasses =
            case class of
                ReadOnlyCard ->
                    [ "card", "card-static" ]

                Card ->
                    [ "card" ]

                Action ->
                    [ "card-action" ]

                Button ->
                    [ "card-button", "teal-text" ]

                Hint ->
                    [ "card-reveal" ]

                Title ->
                    [ "card-title" ]

                Content ->
                    [ "card-content" ]

                Image ->
                    [ "card-image" ]

                _ ->
                    []
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


componentCss : List Snippet
componentCss =
    Css.Namespace.namespace namespace
        [ (.) Container
            [ position relative
            , width (vw 100)
            , height (vh 100)
            , marginTop (px -56)
            ]
        , (.) Card
            [ position absolute
            , top (pct 50)
            , left (pct 50)
            , padding (px 1)
            , width (px 500)
            , overflow hidden
            , transforms
                [ translateX (pct -50)
                , translateY (pct -50)
                ]
            ]
        , (.) HelpIcon
            [ marginTop (px 5)
            ]
        , (.) Action
            [ displayFlex
            ]
        , (.) Button
            [ margin zero |> important ]
        , (.) Hint
            [ display block |> important ]
        , (.) HintContent
            [ marginTop (px 10) ]
        , (.) StaticHint
            [ padding (px 20)
            , color (hex "959595")
            ]
        ]


css : List Snippet
css =
    List.concat [ AnswerList.css, componentCss ]
