module Features.Quiz.Subscriptions exposing (..)

import Keyboard exposing (downs)
import Char exposing (KeyCode)
import Time exposing (every, second)
import Utils.Keyboard exposing (..)
import Features.Quiz.Messages exposing (..)


keypressToAction : KeyCode -> Message
keypressToAction keycode =
    case codeToKey keycode of
        Escape -> Cancel
        LeftArrow -> PrevCard
        RightArrow -> NextCard
        Number1 -> Answer 0
        Number2 -> Answer 1
        Number3 -> Answer 2
        Number4 -> Answer 3
        Number5 -> Answer 4
        _ -> NoOp


subscriptions : Sub Message
subscriptions =
    Sub.batch
        [ every second (\_ -> IncrementTimer)
        , downs keypressToAction
        ]
