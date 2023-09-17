import React from 'react';
import './App.css';
import MainPage from './MainPage';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
