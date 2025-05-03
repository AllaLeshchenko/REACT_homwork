import { useState } from 'react'; //useState — это функция из React, которая позволяет хранить данные внутри компонента и обновлять их при необходимости (например, список людей).

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);

  return (
    <div>
        <h1>Список приглашенных:</h1>
        <ul>
            {people.map((human) => (
                <li key={human.id} style={{background: 'lightblue',
                                           borderRadius: '10px', 
                                           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                                           padding: '10px', 
                                           margin: '15px',
                                           display: 'flex', 
                                           justifyContent: 'space-between', 
                                           alignItems: 'center'}}>
                    <span>{human.name} - {human.age} Лет</span>
                    <button
                     onClick={() => setPeople(people.filter((people) => people.id !== human.id))}
                     style={{
                       backgroundColor: 'blue',
                       color: 'white',
                       border: 'none',
                       borderRadius: '5px',
                       padding: '5px 10px',
                       cursor: 'pointer',
                     }}>Удалить</button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default List;




//people — это текущее состояние, т.е. список, который сейчас видит пользователь.

//setPeople — это функция, с помощью которой ты можешь обновить список (например, удалить кого-то).

//useState([...]) — ты задаёшь начальное значение: массив с объектами, где каждый объект — это человек с id, name и age