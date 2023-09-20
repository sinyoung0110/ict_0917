import React from 'react';
import './App.css';
import MainPage from './MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import BoardPage from './BoardPage';
import Weight from './Weight';
import Plan from './Plan';
import Diary from './Diary';
import Chatbot from './Chatbot';
import Map from './Map';
import PetInfo from './PetInfo';
import Cal from './Cal';
import Plan2 from './Plan2';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/map" element={<Map />} />
        <Route path="/petinfo" element={<PetInfo />} />
        <Route path="/cal" element={<Cal />} />
        <Route path="/plan2" element={<Plan2 />} />
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
