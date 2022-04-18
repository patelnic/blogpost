import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
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
import DeletePost from './components/DeletePost';
import Header from "./components/Header"
import UpdatePost from './components/UpdatePost';
import Profile from './components/Profile';

import SearchBox from './components/SearchBox';

function App() {
  const appName = 'BlogPost';
  const [postsList, setPost] = useState([]);
  const [searchField, setSearchField] = useState('')
  const {isAuthenticated, isLoading} = useAuth0();

  useEffect(() => {
    async function fetchPost() {
      const data = await fetch("/posts");
      //const data = await fetch ("http://localhost:4000/posts")
      const jsonData = await data.json();
      console.log(searchField)
      setPost(jsonData)
    }
    fetchPost();
  }, [])

const createPost = async (post) => {
  console.log("Added", post);
   //const data = await fetch("http://localhost:4000/createblog",
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
  // console.log("delete", id);
  //fetch('http://localhost:4000/posts/' + id, { method: 'DELETE'});
  await fetch('/posts/' + id, { method: 'DELETE'});

  setPost(postsList.filter((post) => post._id == id));
};

const updatePost = async(post) => {
  // console.log("Added", post);
  //await fetch('http://localhost:4000/posts/' + post._id + "/update", {
  await fetch('/posts/' + post._id + "/update", {
    method: 'POST',
    headers: {"Content-type":"application/json"}, body: JSON.stringify(post),
  });
};

const updatePostList = async(value) => {
  //const data = await fetch ("http://localhost:4000/posts")
  const data = await fetch("/posts");
  const jsonData = await data.json();
  setPost(jsonData.filter((post) => (
    post.title.toLowerCase().includes(value.toLocaleLowerCase())
  )))
}

  
  return (
    <>
      {isLoading? <p>Loading</p>:
      <div className="App">
        <NavigationWithBootstap handleChange={(e) => 
            updatePostList(e.target.value)
        }
        />
        <Routes>
          <Route path='/profile' element={<ProtectedRoute protectedComponent={Profile} />}/>
          <Route path="*" element={<p>Sorry, nothing to show here!</p>}/>
          <Route path = '/'
          element = { 
          <>
            <Header appName = {appName}/>
              <div className = "list_container">
                <ol>
                  <PostsList deleteBlogPost = {deleteBlogPost} postsList = {postsList}/>
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
              path = "/:blogId" element = {
              <>
                <Header appName = {appName}/>  
                <BlogDetails />
              </>
            }
          />
          <Route 
              path = "/:blogId/delete" element = {
              <>
                <Header appName = {appName}/>  
                <DeletePost deleteBlogPost = {deleteBlogPost}/>
              </>
            }
          />
          <Route 
              path = "/:blogId/update" element = {
              <>
                <Header appName = {appName}/>  
                <UpdatePost updatePost = {updatePost}/>
              </>
            }
          />
        </Routes>
              </div>
    }
    </>
  );
}

export default App;
