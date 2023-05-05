import React from 'react';
import {Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Output';
import './styles/main.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Input />}/>
          <Route path="/Results" element={<Results />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
