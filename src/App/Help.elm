module App.Help exposing (..)

import Html exposing (..)
import Html.App as App
import App.Messages exposing (..)
import Features.Help.Model as HelpModel
import Features.Help.View as HelpView


type HelpHint
    = HelpModel.HelpHint


view : HelpModel.Model -> Maybe HelpModel.HelpHint -> Html Message
view model hint =
    App.map HelpMessage (HelpView.view model hint)
