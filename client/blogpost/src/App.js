import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
import Header from "./components/Header"
import PostsList from "./components/PostsList"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import BlogDetails from './components/BlogDetails';
import PostList from './components/PostsList';


function App() {
  const appName = 'BlogPost';
  const [postsList, setPost] = useState([]);
 
  useEffect(() => {
    async function fetchPost() {
      const data = await fetch("/post");
      const jsonData = await data.json();
      setPost(jsonData);
    }
    fetchPost();
  }, [postsList.length])

const createPost = async (post) => {
  console.log("Added", post);
  const data = await fetch("/createblog",
  {
    method: 'POST',
    headers: {"Content-type":"application/json"}, body: JSON.stringify(post),
  });
  const newPost = await data.json();
  console.log(newPost);
  
  post._id = newPost.insertedId;
  setPost([...postsList, post]);
}

const deleteBlogPost = async(id) => {
  console.log("delete", id);
  await fetch('/post' + id, { method: 'DELETE'});

  setPost(postsList.filter((post) => post._id == id));
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Link to = '/'>Home</Link>
        <Link to = '/createblog'>Create Blog</Link>
        <Routes>
          <Route path = '/'
          element = { 
          <>
            <Header appName = {appName}
            />
              <div className = "list_container">
                <ol>
                  <PostsList postsList = {postsList}/>
                </ol>
              </div>
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
            <Route 
              path = "/:blogId" element = {<BlogDetails  />}
            />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
