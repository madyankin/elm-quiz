module App.Update.Result exposing (..)

import App.Model exposing (..)
import App.Messages exposing (..)
import App.Routing exposing (Route(..), navigateTo)
import Features.Result.Update as Result
import Features.Result.Messages as ResultMessages


updateResult : ResultMessages.Message -> Model -> ( Model, Cmd Message )
updateResult message model =
    let
        ( result, command ) =
            Result.update message model.result

        taggedCommand =
            Cmd.map ResultMessage command

        finalCommand =
            case message of
                ResultMessages.Close ->
                    Cmd.batch [ taggedCommand, navigateTo Home ]

                _ ->
                    taggedCommand
    in
        ( { model | result = result }, finalCommand )
