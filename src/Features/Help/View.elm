module Features.Help.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (HelpHint(..), PositionSide(..), Position, HelpMessage(..))
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


styleFromPosition : Position -> List ( String, String )
styleFromPosition position =
    let
        mapPair ( side, value ) =
            ( (mapSide side), (toString value) ++ "px" )

        mapSide side =
            case side of
                Top ->
                    "top"

                Right ->
                    "right"

                Bottom ->
                    "bottom"

                Left ->
                    "left"
    in
        List.map mapPair position


hintContainer : HelpHint -> Maybe HelpHint -> Position -> Html HelpMessage
hintContainer currentHint nextHint position =
    let
        containerStyle =
            ( "z-index", "10000" ) :: styleFromPosition position
    in
        div [ namespacedClass Styles.Container [], style containerStyle ]
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
