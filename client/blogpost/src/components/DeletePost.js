import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";


export default function DeletePost({deleteBlogPost}) {
  const {blogId} = useParams();
  const [post, setPost] = useState({})
  const navigate = useNavigate();


  useEffect(() => {
    async function findPost() {
    //const data = await fetch("http://localhost:4000/posts/" + blogId);
    const data = await fetch("/posts/" + blogId);

    const post = await data.json();
    setPost(post);
    }
    findPost();
  }, []);

  const onSubmit = () => {
    deleteBlogPost(post._id);
    navigate('/');
  };

  return (
    <>
      <div class = "post_details">
        <h1 className = "align-left">{post.title}</h1>
        <img className = "blog_post_image_details" src= {post.images} alt="images" />
        <p className = "align-left">
            {post.description}
        </p>
        <div><p>Confirm deletion?</p></div>

        <form onSubmit = {onSubmit}>
            <input type="submit" value="Submit"/>
        </form>
        <p className="date_form">
            {post.date}
        </p>
      </div>
    </>
  )
}
