import React from 'react';

const UserList = ({ users }) => {
  console.log('UserList rendered'); // для отслеживания лишних ререндеров
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;