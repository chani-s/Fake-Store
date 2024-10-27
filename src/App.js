import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className='header'>
          <ul className='header-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jewelry">Jewelry</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jewelry" element={<Jewelry />} />
          <Route path="/Electronics" element={<Electronics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
