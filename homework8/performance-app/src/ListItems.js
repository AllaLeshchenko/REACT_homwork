import React, { useState, useEffect } from 'react';

function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

//   useEffect(() => {
//     console.log('Компонент ListItems обновлен');
//   }, [items]); // намеренная ошибка: лишняя зависимость

// исправление ошибки
useEffect(() => {
  console.log('Компонент ListItems обновлен');
}, []); // исправлено

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите элемент"
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;