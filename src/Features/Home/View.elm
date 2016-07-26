module Features.Home.View exposing (view)

import Html exposing (..)
import Html.Events exposing (..)
import Types exposing (..)
import Features.Home.Messages exposing (..)
import Features.Home.Styles as Styles exposing (namespacedClass)


view : Help Message -> Html Message
view help =
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
            , help HomeMenuHint Nothing [ ( Left, 20 ), ( Top, 150 ) ]
            ]
        ]
