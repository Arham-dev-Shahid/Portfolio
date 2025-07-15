// App.jsx
import React from 'react';
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react';
import About from './pages/About';


function App() {

  return (
    <>
    
      <Router>
        <nav>
          <a className='logo' href='/'>
            <img className="logo" src="logo.svg" alt="profile" />
          </a>
          <div className="links">
            <a className='nav_a'
              href='About'>About</a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
