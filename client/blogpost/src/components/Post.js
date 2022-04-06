import React from 'react';
import '../App.css'
import CreatePost from './CreatePost';

export default function Post({post}) {
  return ( 
    <>
    <li>
        <img className = "blog_post_image" src= {post.imageURLs[0]} alt="images" />
            <h2>
                {post.title}
            </h2>
            <p>
                {post.description}
            </p>
            <p className="date_form">
                {post.date}
            </p>
    </li>
    </>
  );
  } 
