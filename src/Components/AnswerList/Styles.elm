module Components.AnswerList.Styles exposing (..)

import List exposing (append)
import Html exposing (Attribute)
import Html.Attributes exposing (classList)
import Css exposing (..)
import Css.Namespace
import Utils.CssHelpers as CssHelpers


type CssClasses
    = Container


namespace : String
namespace =
    "AnswerList"


namespacedClass : CssClasses -> List String -> Attribute message
namespacedClass class otherClasses =
    let
        defaultClasses =
            case class of
                Container ->
                    [ "collection" ]
    in
        append defaultClasses otherClasses
            |> CssHelpers.namespacedClass namespace class


css : List Snippet
css =
    Css.Namespace.namespace namespace
        [ (.) Container
            [ margin3 (px 20) zero zero ]
        ]


answerClasses : Bool -> Bool -> Bool -> Attribute message
answerClasses correct highlight colorAnswer =
    let
        classes =
            if highlight then
                if colorAnswer then
                    [ ( "green white-text", correct )
                    , ( "red lighten-2 white-text", not correct )
                    ]
                else
                    [ ( "teal lighten-1 white-text", True ) ]
            else
                [ ( "empty", True ) ]
    in
        ( "collection-item", True ) :: classes |> classList
