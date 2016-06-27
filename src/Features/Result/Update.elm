module Features.Result.Update exposing (..)

import Features.Result.Messages exposing (..)
import Features.Result.Model exposing (..)


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        Open result ->
            ( result, Cmd.none )

        _ ->
            ( model, Cmd.none )
