port module Stylesheets exposing (..)

import Html exposing (div)
import Html.App as Html
import Css.File exposing (..)
import Css exposing (stylesheet)
import App.Styles as App


main : Program Never
main =
    Html.program
        { init = ( (), files cssFiles )
        , view = \_ -> (div [] [])
        , update = \_ _ -> ( (), Cmd.none )
        , subscriptions = \_ -> Sub.none
        }


port files : CssFileStructure -> Cmd message


cssFiles : CssFileStructure
cssFiles =
    toFileStructure
        [ ( "build/styles.css", compile (stylesheet App.css) )
        ]
