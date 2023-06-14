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
  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        alert('Registration successful! Please login with your new account.');
        // Clear the input fields after successful registration
        setUsername('');
        setPassword('');
      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  }

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
      
      <button className="register" onClick={handleRegister}>Register</button>

    </form>
    
  );
}


export default LoginPage;