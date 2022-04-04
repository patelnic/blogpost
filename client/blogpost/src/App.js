import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  const appName = "Blog Post"
  const [show, setShowForm] = useState(false);
  const [posts, setPost] = useState([]);

useEffect(() => {
  async function fetchPost() {
    const data = await fetch("http://localhost:4000");
    const jsonData = await data.json();
    console.log("in useEffect ", jsonData);
    setPost(jsonData);
  }
  fetchPost();
}, [])

const createPost = async (post) => {
  console.log("Added", post);
  const data = await fetch("http://localhost:4000/posts",
  {
    method: 'POST',
    headers: {"Content-type":"application/json"}, body: JSON.stringify(post),
  });
  const newPost = await data.json();
  console.log(data);
  setPost([...posts, newPost]);
}

  return (
      <div className="App">
        <a href = '/'> Home</a>
        <a href = '/createblog'>Create Blog</a>
        <Router>
        <Routes>
          <Route
            path='/'
            element = {
              <>
              <Header
                appName = {appName}
              />
              </>
            }
          />
          
        </Routes>
        </Router>
      </div>
  );
}

export default App;
