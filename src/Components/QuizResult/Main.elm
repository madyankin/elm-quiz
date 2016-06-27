module Components.QuizResult.Main exposing (Model, view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Components.Timer.Main as Timer


type alias Model =
    { correctAnswersCount : Int
    , totalAnswersCount : Int
    , time : Int
    , passed : Bool
    }


correctAnswers : Int -> Int -> Html message
correctAnswers correctAnswersCount totalAnswersCount =
    "Правильных ответов: "
        ++ toString correctAnswersCount
        ++ " из "
        ++ toString totalAnswersCount
        |> text


result : Bool -> Html message
result passed =
    let
        message =
            if passed then
                "Ура, вы сдали экзамен!"
            else
                "Жаль, но вы не сдали экзамен"
    in
        h5 [] [ text message ]


view : Model -> Html message
view { correctAnswersCount, totalAnswersCount, time, passed } =
    div
        [ classList
            [ ( "card-panel", True )
            , ( "green lighten-4", passed )
            , ( "red lighten-3", not passed )
            ]
        ]
        [ result passed
        , div [] [ correctAnswers correctAnswersCount totalAnswersCount ]
        , div [] [ Timer.view True time ]
        ]
