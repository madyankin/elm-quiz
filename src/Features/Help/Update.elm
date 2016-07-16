module Features.Help.Update exposing (..)

import Features.Help.Messages exposing (..)
import Features.Help.Model exposing (..)


update : Message -> Model -> ( Model, Cmd Message )
update message model =
    case message of
        ShowHint hint ->
            ( showHint model hint, Cmd.none )

        HideHint ->
            ( hideHint model, Cmd.none )

        EnableHints ->
            ( enableHints, Cmd.none )

        DisableHints ->
            ( disableHints, Cmd.none )
