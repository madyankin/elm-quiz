module Features.ResultsList.View exposing (view)

import Date exposing (Date)
import Date.Format exposing (format)
import Types exposing (..)
import Array exposing (indexedMap, toList)
import Html exposing (..)
import Html.Attributes exposing (..)
import Utils.HtmlHelpers exposing (void)
import Utils.Events exposing (onClick)
import Components.Header.Main as Header
import Components.Icon.Main as Icon
import Components.Timer.Main as Timer
import Features.Result.Model as Result
import Features.ResultsList.Messages exposing (..)
import Features.ResultsList.Model exposing (..)
import Features.ResultsList.Styles as Styles exposing (namespacedClass)


leftMenu : List (Html Message)
leftMenu =
    [ a [ void, class "black-text", onClick Close ]
        [ Icon.view "menu" ]
    ]


rightMenu : Model -> List (Html Message)
rightMenu model =
    []


correctAnswers : Int -> Int -> Html Message
correctAnswers correctAnswersCount totalAnswersCount =
    toString correctAnswersCount
        ++ " из "
        ++ toString totalAnswersCount
        |> text


date : Date -> Html Message
date d =
    text (format "%d.%m.%Y %H:%M" d)


resultItem : ResultId -> Result.Model -> Html Message
resultItem id model =
    let
        result =
            if Result.succeed model then
                span [ namespacedClass Styles.Success [] ] [ text "Пройден" ]
            else
                span [ namespacedClass Styles.Failure [] ] [ text "Не пройден" ]
    in
        tr [ onClick (ShowResult id) ]
            [ td [ namespacedClass Styles.Cell [] ]
                [ date model.date ]
            , td [ namespacedClass Styles.Cell [] ]
                [ correctAnswers (Result.correctAnswersCount model)
                    (Result.totalAnswersCount model)
                ]
            , td [ namespacedClass Styles.Cell [] ]
                [ Timer.view False model.elapsedTime ]
            , td [ namespacedClass Styles.Cell [] ]
                [ result ]
            ]


resultsTable : Model -> Html Message
resultsTable model =
    table [ namespacedClass Styles.Table [] ]
        [ thead []
            [ tr []
                [ th [ namespacedClass Styles.Cell [] ]
                    [ text "Дата" ]
                , th [ namespacedClass Styles.Cell [] ]
                    [ text "Ответы" ]
                , th [ namespacedClass Styles.Cell [] ]
                    [ text "Время" ]
                , th [ namespacedClass Styles.Cell [] ]
                    [ text "Результат" ]
                ]
            ]
        , tbody [] (model |> indexedMap resultItem |> toList)
        ]


view : Model -> Help Message -> Html Message
view model help =
    div [ namespacedClass Styles.Container [] ]
        [ Header.view leftMenu (rightMenu model)
        , div [ namespacedClass Styles.Results [] ]
            [ help ResultTableHint Nothing [ ( Top, 10 ), ( Left, -20 ) ]
            , resultsTable model
            ]
        ]
