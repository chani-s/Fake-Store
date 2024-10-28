import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';
import Electronics from './components/Electronics/Electronics';
import Books from './components/Books/Books';


function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav className='header'>
          <div className='header-links'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/jewelry">Jewelry</Link>
            <Link className='link' to="/electronics">Electronics</Link>
            <Link className='link' to="/books">Books</Link>

          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jewelry" element={<Jewelry />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Books" element={<Books />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
