import { useState } from "react"; //useState — хук состояния из React, позволяет хранить данные внутри компонента.
import Answer from "./Answer";
import "../styles/App.css";

const MathQuiz = () => {    //Создаём сам компонент
    //Состояние компонента (useState):
  const [a, setA] = useState(generateRandom()); 
  const [b, setB] = useState(generateRandom());
  const [score, setScore] = useState(0);    //score — текущий счёт пользователя

  function generateRandom() {               //generateRandom() вызывается сразу, чтобы задать начальные значения
    return Math.floor(Math.random() * 10) + 1; //Генерирует случайное число от 1 до 10 (включительно)
  }

    //Функция проверки ответа:
  const updatePoints = (userAnswer) => {   //Получает ответ пользователя (userAnswer) от компонента Answer
    const correct = a + b;                 //Сравнивает с правильным ответом (a + b)
    if (parseInt(userAnswer) === correct) {
      setScore(score + 1);
    } else {                               //Если правильно — добавляем очко, иначе — отнимаем.
      setScore(score - 1);
    }
    // Генерация новой задачи
    setA(generateRandom());
    setB(generateRandom());
  };

  return (
    <div className="quiz-container">
      <p>Ваши очки: {score}</p>
      <p>{a} + {b} = ?</p>
      <Answer updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;