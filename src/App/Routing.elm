module App.Routing exposing (..)

import Navigation exposing (Location, newUrl, makeParser)
import UrlParser exposing (..)
import String exposing (dropLeft)
import App.Messages exposing (..)


type Route
    = Home
    | Quiz
    | Result Int
    | ResultsList
    | NotFound


routes : Parser (Route -> a) a
routes =
    oneOf
        [ format Home (s "")
        , format Quiz (s "quiz")
        , format Result (s "results" </> int)
        , format ResultsList (s "results")
        ]


routeFromResult : Result String Route -> Route
routeFromResult result =
    case result of
        Ok route ->
            route

        Err string ->
            NotFound


hashParser : Location -> Result String Route
hashParser location =
    location.hash
        |> dropLeft 1
        |> parse identity routes


parser : Navigation.Parser (Result String Route)
parser =
    Navigation.makeParser hashParser


navigateTo : Route -> Cmd Message
navigateTo route =
    newUrl
        <| case route of
            Home -> "#"
            Quiz -> "#quiz"
            Result id -> "#results/" ++ toString id
            ResultsList -> "#results"
            NotFound -> "#"
