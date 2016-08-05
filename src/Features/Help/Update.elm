module Features.Help.Update exposing (..)

import Types exposing (HelpMessage(..))
import Features.Help.Model exposing (..)
import Features.Help.Subscriptions exposing (setHelp)
import Features.Help.Encode exposing (toJson)


update : HelpMessage -> Model -> ( Model, Cmd HelpMessage )
update message model =
    let
        updatedModel =
            case message of
                ShowHintSet hints ->
                    showHintSet model hints

                ShowHint hint ->
                    showHint model hint

                HideHint ->
                    hideHint model

                EnableHints ->
                    enableHints model

                DisableHints ->
                    disableHints model

                SetHelp model ->
                    model
    in
        ( updatedModel, setHelp (toJson updatedModel) )
