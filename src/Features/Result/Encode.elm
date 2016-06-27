module Features.Result.Encode exposing (toJson)

import Date exposing (toTime)
import Array exposing (Array)
import Json.Encode exposing (..)
import Types exposing (Answer)
import Features.Result.Model exposing (Model)


encodeAnswer : Answer -> Value
encodeAnswer { card, answer } =
    let
        encodedAnswer =
            case answer of
                Just value ->
                    int value

                Nothing ->
                    null
    in
        object
            [ ( "card", int card )
            , ( "answer", encodedAnswer )
            ]


encodeAnswersArray : Array Answer -> Value
encodeAnswersArray answers =
    answers
        |> Array.map encodeAnswer
        |> array


toJson : Model -> Value
toJson model =
    object
        [ ( "answers", encodeAnswersArray model.answers )
        , ( "elapsedTime", int model.elapsedTime )
        , ( "date", float (toTime model.date) )
        ]
