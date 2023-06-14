import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";
import './login.css'
function LoginPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:3000/login?username=${username}`);
      let data = await response.json();
      console.log(data);
      if (data.length && data[0].password === password)  {
        console.log(username);
        response = await fetch(`http://localhost:3000/users?username=${username}`);
        data = await response.json();
        console.log(data);
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
    <form onSubmit={handleRegister} className='register'>
        <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
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