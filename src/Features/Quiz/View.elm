module Features.Quiz.View exposing (view)

import Html.App as App
import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (..)
import Config
import Features.Quiz.Messages exposing (..)
import Features.Quiz.Model exposing (..)
import Features.Quiz.Styles as Styles exposing (namespacedClass)
import Types exposing (HelpHint(..), Help)
import Components.Icon.Main as Icon
import Components.Header.Main as Header
import Components.Card.Main as Card
import Components.Timer.Main as Timer


cardMessageToQuizMessage : Model -> Card.Message -> Message
cardMessageToQuizMessage model message =
    case message of
        Card.Prev ->
            PrevCard

        Card.Next ->
            NextCard

        Card.ToggleHint ->
            ToggleHint

        Card.Answer answer ->
            Features.Quiz.Messages.Answer answer

        Card.Finish ->
            Finish (result model)


currentCardNumber : CardIndex -> Int -> Html Message
currentCardNumber currentCard cardsCount =
    text
        ("Вопрос "
            ++ (toString (currentCard + 1))
            ++ " из "
            ++ (toString cardsCount)
        )


containerStyle : CardIndex -> Int -> Attribute Message
containerStyle currentCard cardsCount =
    let
        containerWidth =
            cardsCount * 100

        offset =
            currentCard * -100
    in
        style
            [ ( "transition", "transform 200ms cubic-bezier(0.86, 0, 0.07, 1)" )
            , ( "width", (toString containerWidth) ++ "vw" )
            , ( "transform", "translateX(" ++ (toString offset) ++ "vw)" )
            ]


leftMenu : Html Message -> List (Html Message)
leftMenu help =
    [ a [ void, class "black-text", onClick Cancel ]
        [ Icon.view "menu" ]
    , a [ void, class "black-text material-icons", onClick Start ]
        [ Icon.view "replay" ]
    , help
    ]


rightMenu : Model -> Html Message -> List (Html Message)
rightMenu model help =
    [ a [ void, class "black-text" ]
        [ currentCardNumber model.activeCard Config.cardsPerQuiz ]
    , a [ void, class "black-text" ]
        [ Timer.view True model.elapsedTime ]
    , help
    ]


renderCard : Model -> Maybe AnswerIndex -> CardIndex -> Card -> Html Message
renderCard model selectedAnswer index card =
    let
        kind =
            case ( index, Config.cardsPerQuiz - index - 1 ) of
                ( 0, _ ) ->
                    Card.First

                ( _, 0 ) ->
                    Card.Last

                ( _, _ ) ->
                    Card.Common

        cardModel =
            { kind = kind
            , number = index + 1
            , card = card
            , showHint = model.showHint
            , selectedAnswer = selectedAnswer
            }
    in
        Card.view cardModel
            |> App.map (cardMessageToQuizMessage model)


view : Model -> Help Message -> Html Message
view model help =
    let
        card =
            renderCard model (selectedAnswer model)

        cards =
            List.indexedMap card (getCards model)

        menuHint =
            help QuizMenuHint (Just QuizStatusHint) [ ( Left, 20 ), ( Top, 40 ) ]

        statusHint =
            help QuizStatusHint (Just QuizCardHint) [ ( Right, 20 ), ( Top, 40 ) ]

        cardHint =
            div [ namespacedClass Styles.CardHint [] ]
                [ help QuizCardHint Nothing [ ( Left, -40 ), ( Top, -230 ) ] ]
    in
        div [ namespacedClass Styles.Container [] ]
            [ Header.view (leftMenu menuHint) (rightMenu model statusHint)
            , cardHint
            , div
                [ namespacedClass Styles.Cards []
                , containerStyle model.activeCard Config.cardsPerQuiz
                ]
                cards
            ]
