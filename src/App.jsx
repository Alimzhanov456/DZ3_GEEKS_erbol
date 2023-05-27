import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user, [name]: value }; // Обновляем значение соответствующего ключа
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  };

  return (
    <div className="container">
      <h1>User Information</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={user.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </form>
      <div className="information">
        <h2>Entered Information:</h2>
        {Object.entries(user).map(([key, value]) => (
          <p key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
