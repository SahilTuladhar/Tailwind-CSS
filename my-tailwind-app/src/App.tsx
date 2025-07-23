import React from 'react';
import HomePage from './pages/HomePage';
import Hello from './CrashCourse/Hello';
import { Route , Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>

      <Route path = "/register-page" element = {<LoginPage />}/>
      <Route path = "/home-page" element = {<HomePage />}/>

    </Routes>

  
    
  );
}

export default App;
