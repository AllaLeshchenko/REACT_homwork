import React from 'react';
import User from './User';
import UserForm from './UserForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <User />
      <hr />
      <UserForm />
    </div>
  );
};

export default App;