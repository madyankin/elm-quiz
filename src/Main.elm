port module Main exposing (..)

import Navigation
import App.Model exposing (..)
import App.View exposing (..)
import App.Subscriptions exposing (..)
import App.Routing exposing (..)
import App.Update.Routing
import App.Update exposing (..)


main : Program Never
main =
    Navigation.program parser
        { init = init
        , urlUpdate = App.Update.Routing.update
        , update = update
        , view = view
        , subscriptions = subscriptions
        }
