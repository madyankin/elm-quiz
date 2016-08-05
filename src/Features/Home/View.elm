module Features.Home.View exposing (view)

import Html exposing (..)
import Html.Events exposing (..)
import Types exposing (..)
import Features.Home.Messages exposing (..)
import Features.Home.Styles as Styles exposing (namespacedClass)
import Features.Help.Model as HelpModel exposing (allHintsShown)


view : HelpModel.Model -> Help Message -> Html Message
view helpModel help =
    let
        helpToggleCaption =
            if helpModel.show && not (allHintsShown helpModel) then
                "Не показывать справку"
            else
                "Показывать справку"

        helpToggleMessage =
            if helpModel.show && not (allHintsShown helpModel) then
                HelpMessage DisableHelp
            else
                HelpMessage EnableHelp
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
                , button
                    [ namespacedClass Styles.Button [ "btn" ]
                    , onClick helpToggleMessage
                    ]
                    [ text helpToggleCaption ]
                , help HomeMenuHint Nothing [ ( Left, 20 ), ( Bottom, -100 ) ]
                ]
            ]
