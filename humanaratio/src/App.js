import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{element}</h1>
        <p>
          Welcome to Human Ethics. The goal is to take the idea of open source even further, and open it up to as many people as possible.
        </p>
        <p>
        The first test is open ethics.
        </p>
        <a
          className="App-link"
          href="https://github.com/ryoungblom/humanaratio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <br/>
      </header>
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Human" />;


export default App;
