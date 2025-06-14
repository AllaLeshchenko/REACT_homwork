import React, { useState, useCallback, useMemo } from 'react';
import UserList from './UserList';

const userList = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Anna Klark' },
  { id: 3, name: 'Bob Smith' },
  { id: 4, name: 'Charlie Brown' },
  { id: 5, name: 'Colin Them' },
  { id: 6, name: 'Clark Benito' },
  { id: 7, name: 'David White' },
  { id: 8, name: 'Eva Green' },
  { id: 9, name: 'Nik bordun' },
  { id: 10, name: 'Mila Runis' }
];

const App = () => {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((filterText) => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div>
      <h1>Список пользователей</h1>
      <input
        type="text"
        placeholder="Фильтр по имени"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
};

export default App;