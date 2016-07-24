module Features.Home.View exposing (view)

import Html exposing (..)
import Html.Events exposing (..)
import Types exposing (HelpHint(..), Help)
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
            , help HomeMenuHint Nothing { x = 20, y = 150 }
            ]
        ]
