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
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './components/ProtectedRoute';
import NavigationWithBootstap from './components/NavigationWithBootstap';


function App() {
  const appName = 'BlogPost';
  const [postsList, setPost] = useState([]);
  const {isAuthenticated, isLoading} = useAuth0();
 
  useEffect(() => {
    async function fetchPost() {
      const data = await fetch("http://localhost:4000/posts");
      const jsonData = await data.json();
      setPost(jsonData);
    }
    fetchPost();
  }, [postsList.length])

const createPost = async (post) => {
  console.log("Added", post);
  const data = await fetch("http://localhost:4000/createblog",
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
  await fetch('/posts' + id, { method: 'DELETE'});

  setPost(postsList.filter((post) => post._id == id));
  };


  return (
    <>
      {isLoading? <p>Loading</p>:
      <div className="App">
        <NavigationWithBootstap />
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
              element = {<ProtectedRoute createPost={createPost} protectedComponent={CreatePost}/>
              }
            />
            <Route 
              path = "/:blogId" element = {<BlogDetails  />}
            />
        </Routes>
      </div>
    }
    </>
  );
}

export default App;
