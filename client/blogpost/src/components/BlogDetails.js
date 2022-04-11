import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import { useEffect } from "react";

export default function BlogDetails() {
const {postId} = useParams();
  const [post, setPost] = useState({})
  // console.log(postId.blogId);

  useEffect(() => {
    async function findPost() {
      console.log("in find post");
      const data = await fetch("http://localhost:4000/" + postId);
      const post = await data.json();
      setPost(post);
    }
    findPost();
  });

  return (
    <>
      <img className = "blog_post_image" src= {post.images} alt="images" />
      <h2 className = "align-left">{post.title}</h2>
      <p className = "align-left">
          {post.description}
      </p>
      <p className="date_form">
          {post.date}
      </p>
    </>
  )
}
