module App.Update.Result exposing (..)

import App.Model exposing (..)
import App.Messages exposing (..)
import App.Routing exposing (Route(..), navigateTo)
import Features.Help.Update as Help
import Features.Help.Messages as HelpMessages


updateHelp : HelpMessages.Message -> Model -> ( Model, Cmd Message )
updateHelp message model =
    let
        ( result, command ) =
            Help.update message model.help

        taggedCommand =
            Cmd.map HelpMessage command
    in
        ( { model | result = result }, taggedCommand )
