import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from "./components/Header"
import PostsList from "./components/PostsList"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const appName = 'BlogPost';
  const [postsList, setPost] = useState([]);

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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/'
          element = { 
          <>
            <Header appName = {appName}
            />
              <ul>
                <PostsList postsList = {postsList}/>
              </ul>
          </>
          }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
