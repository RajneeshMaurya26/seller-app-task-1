import React,{useEffect,useState} from 'react';
import './App.css';
import Home from './conatiners/Home/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:pageNumber" element={<Page />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
