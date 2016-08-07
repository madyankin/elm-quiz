module Config exposing (..)


cardsPerQuiz : Int
cardsPerQuiz =
    20


successScore : Float
successScore =
    0.8


timeLimit : Int
timeLimit =
    timeLimitInMinutes * 60


timeLimitInMinutes : Int
timeLimitInMinutes =
    30
