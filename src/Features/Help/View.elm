module Features.Help.View exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Features.Help.Messages exposing (..)
import Features.Help.Model exposing (HelpHint(..), Model, hint)
import Features.Help.Styles as Styles exposing (namespacedClass)


currentHint : Maybe HelpHint -> Html Message
currentHint current =
    div [ namespacedClass Styles.Hint [] ]
        [ current
            |> Maybe.map hint
            |> Maybe.withDefault ""
            |> text
        ]


nextHintButton : Maybe HelpHint -> Html Message
nextHintButton nextHint =
    let
        btn =
            \next ->
                button [ namespacedClass Styles.Next [], onClick (ShowHint next) ] []
    in
        nextHint
            |> Maybe.map btn
            |> Maybe.withDefault (text "")


view : Model -> Maybe HelpHint -> Html Message
view model nextHint =
    div [ namespacedClass Styles.Container [] ]
        [ currentHint model.currentHint
        , nextHintButton nextHint
        , button [ namespacedClass Styles.Hide [], onClick HideHint ] [ text "X" ]
        ]
