module Features.Help.Hints exposing (..)

import Utils.String exposing (pluralize)
import Config exposing (timeLimitInMinutes)


minutesCount : Int -> String
minutesCount count =
    pluralize { one = "минута", few = "минуты", many = "минут" } count


homeMenu : String
homeMenu =
    "С помощью этого меню можно начать тестирование или посмотреть "
        ++ "результаты прошлых попыток"


quizMenu : String
quizMenu =
    "С помощью этого меню можно вернуться на главный экран "
        ++ "или начать новую попытку"


quizStatus : String
quizStatus =
    "Здесь отображается номер текущего вопроса и прошедшее время. "
        ++ "На все вопросы дается "
        ++ toString timeLimitInMinutes
        ++ " "
        ++ minutesCount timeLimitInMinutes
        ++ ". После истечения этого времени экзамен завершится автоматически"


quizCard : String
quizCard =
    "Ответить на вопрос можно щелчком на нужном ответе или нажатием клавиши "
        ++ "с номером ответа. Для перемещения между вопросами используйте кнопки "
        ++ "«Предыдущий» и «Следующий» или клавиши «←» и «→»."


resultTable : String
resultTable =
    "В этой таблице отображаются результаты предыдущих попыток. "
        ++ "Перейти к любому результату можно щелчком на соответсвующей строчке"
