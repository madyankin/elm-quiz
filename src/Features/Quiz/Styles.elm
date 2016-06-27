module Features.Quiz.Styles exposing (..)

import Html exposing (Attribute)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers
import Components.Header.Styles as Header
import Components.Card.Styles as Card


type CssClasses
    = Container
    | HeaderMenu
    | Cards


namespace : String
namespace =
    "Quiz"


namespacedClass : a -> List String -> Attribute message
namespacedClass =
    CssHelpers.namespacedClass namespace


featureCss : List Snippet
featureCss =
    Css.Namespace.namespace namespace
        [ (.) HeaderMenu
            [ position relative
            ]
        , (.) Cards
            [ displayFlex
            , height (vh 100)
            ]
        ]


css : List Snippet
css =
    List.concat
        [ Header.css
        , Card.css
        , featureCss
        ]
