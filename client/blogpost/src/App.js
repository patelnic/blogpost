import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from "./components/Header"
import PostsList from "./components/PostsList"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreatePost from './components/CreatePost';


function App() {
  const appName = 'BlogPost';
  const [postsList, setPost] = useState([]);
  //const [posts, setNewpost] = useState([]);
 
  useEffect(() => {
    async function fetchPost() {
      const data = await fetch("http://localhost:4000/");
      const jsonData = await data.json();
      console.log("in useEffect ", jsonData);
      setPost(jsonData);
    }
    fetchPost();
  }, [postsList.length])

const createPost = async (post) => {
  console.log("Added", post);
  const data = await fetch("http://localhost:4000/",
  {
    method: 'POST',
    headers: {"Content-type":"application/json"}, body: JSON.stringify(post),
  });
  const newPost = await data.json();
  console.log(data);
  setPost([...postsList, newPost]);
}

  return (
    <BrowserRouter>
      <div className="App">
        <a href = '/'>Home</a>
        <a href = '/createblog'>Create Blog</a>
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
          <Route
              path = '/createblog'
              element = {
                <>
                <h1>Create a Blog</h1>
                <CreatePost createPost={createPost}/>
                </>
              }

            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
