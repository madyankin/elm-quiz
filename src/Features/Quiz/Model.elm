
module Features.Quiz.Model exposing (..)

import Random
import Random.Array
import Date exposing (Date)
import Time exposing (Time)
import Array exposing (Array)
import Maybe exposing (..)
import Types exposing (..)
import Config
import Data.CardsList exposing (cardsList, cardById)


type alias Model =
    { activeCard : CardIndex
    , elapsedTime : Int
    , answers : Array Answer
    , showHint : Bool
    , date : Date
    }


init : Model
init =
    { activeCard = 0
    , elapsedTime = 0
    , answers = Array.empty
    , showHint = False
    , date = Date.fromTime 0
    }


shuffleGenerator : Random.Generator (Array CardId)
shuffleGenerator =
    cardsList
        |> Array.fromList
        |> Array.map .id
        |> Random.Array.shuffle


initAnswers : Model -> Array CardId -> Model
initAnswers model cards =
    let
        answers =
            cards
                |> Array.slice 0 Config.cardsPerQuiz
                |> Array.map (\card -> Answer card Nothing)
    in
        { model | answers = answers }


reset : Model -> Model
reset model =
    { model | activeCard = 0, elapsedTime = 0 }


setDate : Model -> Time -> Model
setDate model time =
    { model | date = Date.fromTime time }


prevCard : Model -> Model
prevCard model =
    let
        activeCard =
            max (model.activeCard - 1) 0
    in
        { model | activeCard = activeCard, showHint = False }


nextCard : Model -> Model
nextCard model =
    let
        activeCard =
            min (model.activeCard + 1) (Array.length model.answers - 1)
    in
        { model | activeCard = activeCard, showHint = False }


toggleHint : Model -> Model
toggleHint model =
    { model | showHint = not model.showHint }


incrementTimer : Model -> Model
incrementTimer model =
    { model | elapsedTime = model.elapsedTime + 1 }


addAnswer : Model -> AnswerIndex -> Model
addAnswer model index =
    case activeAnswer model of
        Just a ->
            if isValidAnswerIndex model index then
                let
                    answers =
                        Array.set model.activeCard
                            { a | answer = Just index }
                            model.answers
                in
                    { model | answers = answers }
            else
                model

        Nothing ->
            model


isValidAnswerIndex : Model -> AnswerIndex -> Bool
isValidAnswerIndex model index =
    case activeCard model of
        Just card ->
            index < List.length card.answers

        Nothing ->
            False


selectedAnswer : Model -> Maybe AnswerIndex
selectedAnswer model =
    Array.get model.activeCard model.answers `andThen` .answer


getCards : Model -> List Card
getCards model =
    model.answers
        |> Array.map .card
        |> Array.map cardById
        |> Array.toList
        |> List.filterMap identity


activeAnswer : Model -> Maybe Answer
activeAnswer model =
    Array.get model.activeCard model.answers


activeCard : Model -> Maybe Card
activeCard model =
    activeAnswer model `andThen` (\{ card } -> cardById card)


result : Model -> Types.Result
result model =
    { elapsedTime = model.elapsedTime
    , answers = model.answers
    , date = model.date
    }
