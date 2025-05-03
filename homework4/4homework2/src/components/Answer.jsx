import { useState } from "react";

const Answer = ({ updatePoints }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      updatePoints(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="answer">
          <input
           type="number"
           value={input}
           onChange={(e) => setInput(e.target.value)}
           placeholder="Введите ответ"
          />
          <button type="submit">Проверить</button>
      </div>
    </form>
  );
};

export default Answer;