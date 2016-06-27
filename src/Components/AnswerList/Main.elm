module Components.AnswerList.Main exposing (..)

import Html exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (..)
import Components.AnswerList.Styles as Styles
    exposing
        ( namespacedClass
        , answerClasses
        )


type Message
    = Answer AnswerIndex


type alias Model =
    { readOnly : Bool
    , answers : List String
    , selectedAnswer : Maybe AnswerIndex
    , correctAnswer : AnswerIndex
    , colorAnswer : Bool
    }


highlightAnswer : AnswerIndex -> Maybe AnswerIndex -> Bool
highlightAnswer current selected =
    selected
        |> Maybe.map (\answer -> answer == current)
        |> Maybe.withDefault False


renderAnswer : Model -> AnswerIndex -> String -> Html Message
renderAnswer model answer answerText =
    let
        caption =
            toString (answer + 1) ++ ". " ++ answerText

        correct =
            answer == model.correctAnswer

        highlight =
            highlightAnswer answer model.selectedAnswer

        classes =
            answerClasses correct highlight model.colorAnswer

        attrs =
            if model.readOnly then
                [ void, classes ]
            else
                [ void, classes, onClick (Answer answer) ]
    in
        a attrs [ text caption ]


view : Model -> Html Message
view model =
    model.answers
        |> List.indexedMap (\index text -> renderAnswer model index text)
        |> div [ namespacedClass Styles.Container [] ]
