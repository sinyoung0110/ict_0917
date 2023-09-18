import React from 'react';
import './App.css';
import MainPage from './MainPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import BoardPage from './BoardPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/board" element={<BoardPage />} />
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
