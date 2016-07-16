module App.Styles exposing (..)

import Css exposing (..)
import Features.Home.Styles as Home
import Features.Quiz.Styles as Quiz
import Features.ResultsList.Styles as ResultsList
import Features.Help.Styles as Help


css : List Snippet
css =
    List.concat
        [ Home.css
        , Quiz.css
        , ResultsList.css
        , Help.css
        ]
