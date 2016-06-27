module Features.Home.View exposing (view)

import Html exposing (..)
import Html.Events exposing (..)

import Features.Home.Messages exposing (..)
import Features.Home.Styles as Styles exposing (namespacedClass)


view : Html Message
view =
    div [ namespacedClass Styles.Container [] ]
        [ div [ namespacedClass Styles.Card [ "card" ] ]
            [ button
                [ namespacedClass Styles.Button [ "btn" ]
                , onClick OpenQuiz
                ]
                [ text "Начать тестирование" ]
            , button
                [ namespacedClass Styles.Button [ "btn" ]
                , onClick OpenResultsList
                ]
                [ text "Результаты" ]
            ]
        ]
