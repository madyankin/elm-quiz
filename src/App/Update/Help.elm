module App.Update.Help exposing (..)

import Types exposing (HelpMessage(..))
import App.Model exposing (..)
import App.Messages exposing (..)
import Features.Help.Update as Help


updateHelp : HelpMessage -> Model -> ( Model, Cmd Message )
updateHelp message model =
    let
        ( help, command ) =
            Help.update message model.help

        taggedCommand =
            Cmd.map HelpMessage command
    in
        ( { model | help = help }, taggedCommand )
