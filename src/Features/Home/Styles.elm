module Features.Home.Styles exposing (..)

import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers


type CssClasses
    = Container
    | Card
    | Button


namespace : String
namespace =
    "Home"


namespacedClass : a -> List String -> Attribute message
namespacedClass =
    CssHelpers.namespacedClass namespace


css : List Snippet
css =
    Css.Namespace.namespace namespace
        [ (.) Container
            [ position absolute
            , width (vw 100)
            , height (vw 100)
            ]
        , (.) Card
            [ position absolute
            , top (pct 50)
            , left (pct 50)
            , padding (px 40)
            , width (px 300)
            , textAlign center
            , transforms
                [ translateX (pct -50)
                , translateY (pct -50)
                ]
            ]
        , (.) Button
            [ width (pct 100)
            , marginBottom (px 20)
            , lastChild
                [ marginBottom zero
                ]
            ]
        ]
