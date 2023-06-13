import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import AppPage from './pages/AppPage';
import NotFound from './pages/NotFound';
import UserInfo from './pages/UserInfo';
import Todos from './pages/Todos';
import Albums from './pages/Albums';
import Posts from './pages/Posts';
import PhotoAlbumPage from './pages/PhotoAlbumPage'
import CommentsPage from './pages/CommentsPage'

import './App.css';


function App() {
  return (
  <BrowserRouter>
    <Routes className='navbar'>
    <Route path="/" element={<LoginPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/application" element={<AppPage />} />
    <Route path="users/:id/info" element={<UserInfo />}/>
    <Route path="users/:id/todos"  element={<Todos />} />
    <Route path="users/:id/posts" element={<Posts />} />
    <Route path="/users/:userId/posts/:postId/comments" element={<CommentsPage />} />
    <Route path="users/:id/albums" element={<Albums />}/>
    <Route path="/users/:userId/albums/:albumId/photos" element={<PhotoAlbumPage />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
