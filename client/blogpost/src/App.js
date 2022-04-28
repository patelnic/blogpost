import './App.css';
import React, { useState } from 'react';
import { useEffect } from "react";
import PostsList from "./components/PostsList"
import { Routes, Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import BlogDetails from './components/BlogDetails';
import { useAuth0 } from '@auth0/auth0-react';
import ProtectedRoute from './components/ProtectedRoute';
import NavigationWithBootstap from './components/NavigationWithBootstap';
import DeletePost from './components/DeletePost';
import Header from "./components/Header"
import UpdatePost from './components/UpdatePost';
import Profile from './components/Profile';


function App() {
  const appName = 'BLOGPOST';
  const [postsList, setPost] = useState([]);
  const {isLoading, user} = useAuth0();

  useEffect(() => {
    async function fetchPost() {
      //const data = await fetch("/posts");
      const data = await fetch ("http://localhost:4000/posts")
      const jsonData = await data.json();
      setPost(jsonData)
    }
    fetchPost();
  }, [])

  useEffect(() => {
    if (user !== undefined) {
      async function findUser() {
        //const data = await fetch("/users/" + user.email);
        const data = await fetch ("http://localhost:4000/users/" + user.email)
        const userData = await data.json();
        if (userData == null) {
            //const data = await fetch("/users",
            const data = await fetch("http://localhost:4000/users",
            {
              method: 'POST',
              headers: {"Content-type":"application/json"}, body: JSON.stringify(user),
            });

            const newUser = await data.json();
            console.log("New User saved" + newUser);
        }

      } findUser();
    }
  },)
  
const createPost = async (post) => {
  console.log("Added", post);
  const data = await fetch("http://localhost:4000/createblog",
  //const data = await fetch("/createblog",
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
  fetch('http://localhost:4000/posts/' + id, { method: 'DELETE'});
  //await fetch('/posts/' + id, { method: 'DELETE'});

  setPost(postsList.filter((post) => post._id === id));
};

const updatePost = async(post) => {
  // console.log("Added", post);
  await fetch('http://localhost:4000/posts/' + post._id + "/update", {
  //await fetch('/posts/' + post._id + "/update", {
    method: 'POST',
    headers: {"Content-type":"application/json"}, body: JSON.stringify(post),
  });
};

const updatePostList = async(searchChars) => {
  const data = await fetch ("http://localhost:4000/posts")
  //const data = await fetch("/posts");
  const jsonData = await data.json();
  setPost(jsonData.filter((post) => (
    post.title.toLowerCase().includes(searchChars.toLocaleLowerCase())
  )))

  const searchData = await fetch('http://localhost:4000/search/' + searchChars.toLocaleLowerCase(), {
    //const searchData = await fetch('/search/' + searchChars.toLocaleLowerCase(), {

    mode: 'no-cors',
    method: 'POST',
    headers: {"Content-type":"application/json"}, 
    body: JSON.stringify(searchChars.toLocaleLowerCase()),
  });

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
              element = {
                <>
              <Header appName = {appName}/>
              <ProtectedRoute createPost={createPost} protectedComponent={CreatePost}/>
              </>
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
