import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !status.trim()) {
      alert('Пожалуйста, заполните оба поля.');
      return;
    }
    setUserInfo(name, status);
    setName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User Information</h2>
      <div>
  <label>
    Name:
    <input
      type="text"
      placeholder="Имя"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </label>
      </div>
      <div>
    <label>
        Status:
        <input
          type="text"
          placeholder="Статус"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);