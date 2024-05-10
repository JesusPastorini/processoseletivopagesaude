import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Abaut from './pages/Abaut';

function App() {
  const isAuthenticated = sessionStorage.getItem('authToken'); // Verifica se o token existe

  return (
    <div>
      <Routes>
        <Route exact path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
        <Route exact path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route exact path="/registration" element={isAuthenticated ? <Register /> : <Navigate to="/" />} />
        <Route exact path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/contact" />} />
        <Route exact path="/about" element={isAuthenticated ? <Abaut /> : <Navigate to="/abaut" />} />
      </Routes>
    </div>
  )
}

export default App
