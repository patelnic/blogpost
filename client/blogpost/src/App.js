import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [show, setShowForm] = useState(false);
  const [task, setPost] = useState([]);

useEffect(() => {
  async function fetchPost() {
    const data = await fetch("http://localhost:4000");
    const jsonData = await data.json();
    console.log("in useEffect ", jsonData);
    setPost(jsonData);
  }
  fetchPost();
}, [])

  return (
      <div className="App">
        <a href = "/"> Home</a>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
