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
          <link className='logo' to='/'>
            <img className="logo" src="logo.svg" alt="profile" />
          </link>
          <div className="links">
            <link className='nav_a'
              to='/About'>About</link>
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
