module Utils.Commands exposing (..)

import Task exposing (perform, succeed)


sendMessage : a -> Cmd a
sendMessage message =
    perform identity identity (succeed message)
