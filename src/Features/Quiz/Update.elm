module Features.Quiz.Update exposing (..)

import Random
import Time
import Utils.Commands exposing (sendMessage)
import Config exposing (timeLimit)
import Task exposing (perform)
import Features.Quiz.Messages exposing (..)
import Features.Quiz.Model exposing (..)


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        Start ->
            ( reset model
            , Cmd.batch
                [ perform (\_ -> NoOp) SetDate Time.now
                , Random.generate InitAnswers shuffleGenerator
                ]
            )

        InitAnswers cards ->
            ( initAnswers model cards, Cmd.none )

        NextCard ->
            ( nextCard model, Cmd.none )

        PrevCard ->
            ( prevCard model, Cmd.none )

        ToggleHint ->
            ( toggleHint model, Cmd.none )

        IncrementTimer ->
            let
                updatedModel =
                    incrementTimer model

                command =
                    if updatedModel.elapsedTime == timeLimit then
                        sendMessage <| Finish (result updatedModel)
                    else
                        Cmd.none
            in
                ( updatedModel, command )

        Answer answer ->
            ( addAnswer model answer, Cmd.none )

        SetDate time ->
            ( setDate model time, Cmd.none )

        _ ->
            ( model, Cmd.none )
