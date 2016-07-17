module Features.Home.View exposing (view)

import Html exposing (..)
import Html.App as App
import Html.Events exposing (..)
import Features.Home.Messages exposing (..)
import Features.Home.Styles as Styles exposing (namespacedClass)
import Features.Help.Model exposing (HelpHint(..), Help)
import Features.Help.Messages as HelpMessages


view : Help HelpMessages.Message -> Html Message
view originalHelp =
    let
        help currentHint nextHint position =
            App.map HelpMessage (originalHelp currentHint nextHint position)
    in
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
                , help HomeMenuHint (Just QuizMenuHint) { x = 0, y = 170 }
                , help QuizMenuHint Nothing { x = 0, y = 0 }
                ]
            ]
