module Features.Help.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Features.Help.Messages exposing (..)
import Features.Help.Model exposing (HelpHint(..), Model, hint)
import Features.Help.Styles as Styles exposing (namespacedClass)


nextHintButton : Maybe HelpHint -> Html Message
nextHintButton nextHint =
    let
        btn =
            \next ->
                button
                    [ namespacedClass Styles.Next []
                    , onClick (ShowHint next)
                    ]
                    [ text "Далее" ]
    in
        nextHint
            |> Maybe.map btn
            |> Maybe.withDefault (text "")


closeButton : Html Message
closeButton =
    button [ namespacedClass Styles.Hide [], onClick HideHint ] [ text "X" ]


hintContainer : HelpHint -> Maybe HelpHint -> Html Message
hintContainer currentHint nextHint =
    div [ namespacedClass Styles.Container [] ]
        [ div [ namespacedClass Styles.Hint [] ] [ text (hint currentHint) ]
        , nextHintButton nextHint
        , closeButton
        ]


view : Model -> HelpHint -> Maybe HelpHint -> Html Message
view model currentHint nextHint =
    let
        renderHint hint =
            if hint == currentHint then
                hintContainer currentHint nextHint
            else
                text ""
    in
        model.currentHint
            |> Maybe.map renderHint
            |> Maybe.withDefault (text "")
