module Utils.String exposing (..)


type alias PluralizationForms =
    { one : String
    , few : String
    , many : String
    }


pluralize : PluralizationForms -> Int -> String
pluralize forms count =
    let
        reminder =
            rem count 10
    in
        if reminder == 1 then
            forms.one
        else if reminder > 0 && reminder < 5 then
            forms.few
        else
            forms.many
