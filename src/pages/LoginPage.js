import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";
import './login.css'
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/login?username=${username}`);
      const data = await response.json();
      if (data.length && data[0].password === password)  {
        localStorage.setItem('username', JSON.stringify(data[0]));
        navigate("/application")
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <form onSubmit={handleLogin} className='login'>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}


export default LoginPage;