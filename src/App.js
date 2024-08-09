import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Şirket Yetkilileri Harcama Takip Uygulaması
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React'i Öğrenin
        </a>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
