import React, { useState } from 'react';
import './App.css';
import ValueDisplay from './ValueDisplay';

function App() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст"
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;

