import React from 'react';
import logo from './images/search-engine.svg';
import './App.css';

function App() {
  return (
    <div className="main">
      <header className="header">
        <p className="title">Welcome to my Search Engine App.</p>
        <img src={logo} className="search-logo" alt="logo" />
        <a className="link" href="" target="_parent" rel="noopener noreferrer">
          Go to Search!
        </a>
      </header>
    </div>
  );
}

export default App;
