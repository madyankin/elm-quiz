module Features.Result.Model exposing (..)

import Date exposing (Date)
import Array exposing (Array, filter, length)
import Maybe exposing (andThen)
import Types exposing (..)
import Data.CardsList exposing (cardById)
import Config exposing (successScore)


type alias Model =
    { answers : Array Answer
    , elapsedTime : Int
    , date: Date
    }


init : Model
init =
    { answers = Array.empty
    , elapsedTime = 0
    , date = Date.fromTime 0
    }


isCorrectAnswer : Answer -> Bool
isCorrectAnswer { card, answer } =
    card
        |> cardById
        |> Maybe.map .correctAnswer
        |> Maybe.map2 (==) answer
        |> Maybe.withDefault False


correctAnswersCount : Model -> Int
correctAnswersCount model =
    model.answers
        |> filter isCorrectAnswer
        |> length


totalAnswersCount : Model -> Int
totalAnswersCount model =
    length model.answers


getCards : Model -> List Card
getCards model =
    model.answers
        |> Array.map .card
        |> Array.map cardById
        |> Array.toList
        |> List.filterMap identity


selectedAnswer : CardIndex -> Model -> Maybe AnswerIndex
selectedAnswer index model =
    Array.get index model.answers `andThen` .answer


succeed : Model -> Bool
succeed model =
    let
        total =
            toFloat (totalAnswersCount model)

        correct =
            toFloat (correctAnswersCount model)
    in
        correct / total > successScore
