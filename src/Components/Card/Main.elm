module Components.Card.Main exposing (Model, Message(..), Kind(..), view)

import Html.App as App
import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (..)
import Components.Icon.Main as Icon
import Components.AnswerList.Main as AnswerList
import Components.Card.Styles as Styles exposing (namespacedClass)


type Kind
    = First
    | Last
    | Common
    | ReadOnly


type Message
    = Next
    | Prev
    | Finish
    | ToggleHint
    | Answer AnswerIndex


type alias Model =
    { kind : Kind
    , number : Int
    , card : Card
    , showHint : Bool
    , selectedAnswer : Maybe AnswerIndex
    }


answerListMessageToCardMessage : AnswerList.Message -> Message
answerListMessageToCardMessage message =
    case message of
        AnswerList.Answer answer ->
            Answer answer


image : Card -> Html Message
image { imageName } =
    case imageName of
        Just name ->
            div [ namespacedClass Styles.Image [] ]
                [ img [ src ("assets/images/" ++ name) ] [] ]

        Nothing ->
            text ""


hint : Model -> Html Message
hint { card, showHint } =
    let
        transform =
            if showHint then
                "translateY(-100%)"
            else
                "translateY(0)"
    in
        div
            [ namespacedClass Styles.Hint []
            , style [ ( "transform", transform ) ]
            ]
            [ div [ class "material-icons right", onClick ToggleHint ] [ text "close" ]
            , div [ namespacedClass Styles.Title [] ] [ text "Подсказка" ]
            , div [ namespacedClass Styles.HintContent [] ] [ text card.hint ]
            ]


content : Model -> Html Message
content { number, card, kind, selectedAnswer } =
    let
        hint =
            case kind of
                ReadOnly ->
                    text ""

                _ ->
                    span
                        [ namespacedClass Styles.HelpIcon []
                        , onClick ToggleHint
                        ]
                        [ Icon.view "live_help" ]

        title =
            [ text ("Вопрос №" ++ (toString number)) ]

        answers =
            AnswerList.view
                { readOnly = kind == ReadOnly
                , answers = card.answers
                , selectedAnswer = selectedAnswer
                , correctAnswer = card.correctAnswer
                , colorAnswer = kind == ReadOnly
                }
    in
        div [ namespacedClass Styles.Content [] ]
            [ div [ namespacedClass Styles.Title [] ] title
            , p []
                [ text card.question ]
            , App.map answerListMessageToCardMessage answers
            ]


prev : Html Message
prev =
    a [ void, namespacedClass Styles.Button [], onClick Prev ]
        [ text "Предыдущий" ]


next : Html Message
next =
    a [ void, namespacedClass Styles.Button [], onClick Next ]
        [ text "Следующий" ]


finish : Html Message
finish =
    a [ void, namespacedClass Styles.Button [], onClick Finish ]
        [ text "Закончить тестирование" ]


buttons : Kind -> Html Message
buttons kind =
    div [ namespacedClass Styles.Action [] ]
        <| case kind of
            First ->
                [ next ]

            Last ->
                [ prev, finish ]

            Common ->
                [ prev, next ]

            ReadOnly ->
                []


view : Model -> Html Message
view model =
    case model.kind of
        ReadOnly ->
            div [ namespacedClass Styles.ReadOnlyCard [] ]
                [ image model.card
                , content model
                  -- , div [ namespacedClass Styles.StaticHint [] ]
                  --     [ text model.card.hint ]
                ]

        _ ->
            div [ namespacedClass Styles.Container [] ]
                [ div [ namespacedClass Styles.Card [] ]
                    [ image model.card
                    , content model
                    , buttons model.kind
                      -- , hint model
                    ]
                ]
