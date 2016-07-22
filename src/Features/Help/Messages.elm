module Features.Help.Messages exposing (..)

import Types exposing (HelpHint)

type Message
  = ShowHint HelpHint
  | HideHint
  | EnableHints
  | DisableHints
