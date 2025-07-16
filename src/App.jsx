// App.jsx
import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link className='logo' to='/'>
          <img className="logo" src="logo.svg" alt="profile" />
        </Link>
        <div className="links">
          <Link className='nav_a' to='/about'>About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
