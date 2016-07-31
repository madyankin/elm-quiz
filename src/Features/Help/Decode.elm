module Features.Help.Decode exposing (fromJson)

import Json.Decode exposing (..)
import Json.Decode.Extra exposing ((|:))
import Types exposing (HelpHint(..))
import Features.Help.Model exposing (Model, init)


modelDecoder : Decoder Model
modelDecoder =
    succeed Model
        |: ("show" := bool)
        |: (("currentHint" := maybe string) `andThen` currentHintDecoder)
        |: (("shownHints" := list string) `andThen` shownHints)


helpHint : String -> HelpHint
helpHint value =
    case value of
        "HomeMenuHint" ->
            HomeMenuHint

        "QuizMenuHint" ->
            QuizMenuHint

        "QuizStatusHint" ->
            QuizStatusHint

        "QuizCardHint" ->
            QuizCardHint

        "ResultTableHint" ->
            ResultTableHint

        _ ->
            HomeMenuHint


currentHintDecoder : Maybe String -> Decoder (Maybe HelpHint)
currentHintDecoder hint =
    Maybe.map helpHint hint
        |> succeed


shownHints : List String -> Decoder (List HelpHint)
shownHints hints =
    List.map helpHint hints
        |> succeed


fromJson : Value -> Model
fromJson json =
    case decodeValue modelDecoder json of
        Ok model ->
            model

        Err message ->
            init Nothing
