module Features.ResultsList.Update exposing (..)

import Features.ResultsList.Messages exposing (..)
import Features.ResultsList.Model exposing (..)
import Features.ResultsList.Subscriptions exposing (setResults)
import Features.ResultsList.Encode exposing (toJson)


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        AddResult result ->
            let
                updatedModel =
                    add result model
            in
                ( updatedModel, setResults (toJson updatedModel) )

        SetResults results ->
            ( results, Cmd.none )

        _ ->
            ( model, Cmd.none )
