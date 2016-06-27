module Components.Header.Main exposing (view)

import Html exposing (..)
import Components.Header.Styles as Styles
    exposing
        ( CssClasses(..)
        , namespacedClass
        )


menu : CssClasses -> List (Html message) -> Html message
menu kind items =
    ul [ namespacedClass kind [] ]
        (List.map (\item -> li [] [ item ]) items)


view : List (Html message) -> List (Html message) -> Html message
view left right =
    nav [ namespacedClass Styles.Menu [] ]
        [ menu Styles.Left left, menu Styles.Right right ]
