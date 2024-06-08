import React, { useState } from 'react';
import './App.css';

const LoggedIn = ({ onLogout }) => {
  return (
    <div className="logged-in">
      <h1>Welcome, you are logged in!</h1>
      <button onClick={onLogout} style={{backgroundColor:'crimson'}}>Logout</button>
    </div>
  );
};

const LoggedOut = ({ onLogin }) => {
  return (
    <div className="logged-out">
      <h1>Please log in</h1>
      <button onClick={onLogin} style={{backgroundColor:'#07ff'}}>Login</button>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <LoggedIn onLogout={handleLogout} />
      ) : (
        <LoggedOut onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
