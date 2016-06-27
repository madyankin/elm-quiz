module Features.Result.View exposing (view)

import Html exposing (..)
import Html.App as App
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Types exposing (..)
import Features.Result.Messages exposing (..)
import Features.Result.Model exposing (..)
import Components.Icon.Main as Icon
import Components.Header.Main as Header
import Components.QuizResult.Main as QuizResult
import Components.Card.Main as Card


leftMenu : List (Html Message)
leftMenu =
    [ a [ void, class "black-text", onClick Close ]
        [ Icon.view "menu" ]
    ]


rightMenu : Model -> List (Html Message)
rightMenu model =
    []


result : Model -> Html Message
result model =
    QuizResult.view
        { correctAnswersCount = correctAnswersCount model
        , totalAnswersCount = totalAnswersCount model
        , time = model.elapsedTime
        , passed = succeed model
        }


card : Model -> CardIndex -> Card -> Html Message
card model index card =
    App.map (\_ -> NoOp)
        <| Card.view
            { kind = Card.ReadOnly
            , number = index + 1
            , card = card
            , showHint = False
            , selectedAnswer = selectedAnswer index model
            }


view : Model -> Html Message
view model =
    let
        cards =
            getCards model |> List.indexedMap (card model)
    in
        div [ class "Result" ]
            [ Header.view leftMenu (rightMenu model)
            , div [ class "Result-container" ]
                [ result model
                , div [ class "Result-cards" ] cards
                ]
            ]
