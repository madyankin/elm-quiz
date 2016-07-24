module App.Help exposing (help)

import Html exposing (Html)
import Html.App exposing (map)
import Types exposing (HelpHint, Position, HelpMessage)
import Features.Help.Model exposing (Model)
import Features.Help.View exposing (view)


type alias Mapper message =
    HelpMessage -> message


help : Model -> Mapper message -> HelpHint -> Maybe HelpHint -> Position -> Html message
help model mapper hint nextHint position =
    map mapper (view model hint nextHint position)
