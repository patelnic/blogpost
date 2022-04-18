import React, { useState } from 'react'
import {useParams} from "react-router-dom";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function BlogDetails() {
  const {blogId} = useParams();
  const [post, setPost] = useState({})
  const { user } = useAuth0();
  const { name, picture, email } = user;

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
      <div className = "post_details">
        <h1 className = "align-left">{post.title}</h1>
        <img className = "blog_post_image_details" src= {post.images} alt="images" />
        <p className = "align-left">
            {post.description}
        </p>
        {post.email == email &&
        <>
        <p> <Link to = {'/' + post._id + '/update'}>Update</Link></p>
        <p> <Link to = {'/' + post._id + '/delete'}>Delete</Link></p>
        </>
        }
        <p className="date_form">
            {post.date}
        </p>
      </div>
    </>
  )
}
