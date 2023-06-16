import React, { useState,createContext } from 'react';
import {  useNavigate } from "react-router-dom";
import './login.css'

function RegisterPage() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,username,email,street,city,phone, password  }),
      });
  
      if (response.ok) {
        alert('Registration successful! Please login with your new account.');
        // Clear the input fields after successful registration
        setName('');
        setUsername('');
        setPassword('');
        setEmail('');
        setStreet('');
        setCity('');
        setPhone('');
        navigate("/login")

      } else {
        const data = await response.json();
        alert(data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
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
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Street:
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}


export default RegisterPage;