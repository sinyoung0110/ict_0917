import React from 'react';
import './App.css';
import MainPage from './MainPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
       
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
