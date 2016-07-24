module Features.Help.Update exposing (..)

import Types exposing (HelpMessage(..))
import Features.Help.Model exposing (..)


update : HelpMessage -> Model -> ( Model, Cmd HelpMessage )
update message model =
    case message of
        ShowHint hint ->
            ( showHint model hint, Cmd.none )

        HideHint ->
            ( hideHint model, Cmd.none )

        EnableHints ->
            ( enableHints model, Cmd.none )

        DisableHints ->
            ( disableHints model, Cmd.none )
