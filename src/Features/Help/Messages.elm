module Features.Help.Messages exposing (..)

import Features.Help.Model exposing (HelpHint)

type Message
  = ShowHint HelpHint
  | HideHint
  | EnableHints
  | DisableHints
