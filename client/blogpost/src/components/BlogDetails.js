import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
export default function BlogDetails() {
  const {blogId} = useParams();
  const [post, setPost] = useState({})

  useEffect(() => {
    async function findPost() {
      // const data = await fetch("http://localhost:4000/posts/" + blogId);
      const data = await fetch("/posts/" + blogId);
      const post = await data.json();
      setPost(post);
    }
    findPost();
  }, []);

  return (
    <>
      <div class = "post_details">
        <h1 className = "align-left">{post.title}</h1>
        <img className = "blog_post_image_details" src= {post.images} alt="images" />
        <p className = "align-left">
            {post.description}
        </p>
        <p className="date_form">
            {post.date}
        </p>
        <p> <Link to = {'/' + post._id + '/update'}>Update</Link></p>
        <p> <Link to = {'/' + post._id + '/delete'}>Delete</Link></p>
      </div>
    </>
  )
}
