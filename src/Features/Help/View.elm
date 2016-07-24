module Features.Help.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (HelpHint(..), Position, HelpMessage(..))
import Features.Help.Model exposing (Model, hint)
import Features.Help.Styles as Styles exposing (namespacedClass)


nextHintButton : Maybe HelpHint -> Html HelpMessage
nextHintButton nextHint =
    let
        btn =
            \next ->
                a
                    [ void
                    , namespacedClass Styles.Next []
                    , onClick (ShowHint next)
                    ]
                    [ text "Далее" ]
    in
        nextHint
            |> Maybe.map btn
            |> Maybe.withDefault (text "")


closeButton : Html HelpMessage
closeButton =
    a [ void, namespacedClass Styles.Hide [], onClick HideHint ]
        [ text "✕" ]


hintContainer : HelpHint -> Maybe HelpHint -> Position -> Html HelpMessage
hintContainer currentHint nextHint position =
    let
        containerStyle =
            style
                [ ( "top", (toString position.y) ++ "px" )
                , ( "left", (toString position.x) ++ "px" )
                , ( "z-index", "10000" )
                ]
    in
        div [ namespacedClass Styles.Container [], containerStyle ]
            [ div [ namespacedClass Styles.Hint [] ] [ text (hint currentHint) ]
            , nextHintButton nextHint
            , closeButton
            ]


view : Model -> HelpHint -> Maybe HelpHint -> Position -> Html HelpMessage
view model currentHint nextHint position =
    let
        renderHint hint =
            if hint == currentHint then
                hintContainer currentHint nextHint position
            else
                text ""
    in
        model.currentHint
            |> Maybe.map renderHint
            |> Maybe.withDefault (text "")
