import React from 'react';
import '../App.css'
import CreatePost from './CreatePost';

export default function Post({post}) {
  return ( 
    <>
        <li>
                <img className = "blog_post_image" src= {post.images} alt="images" />
                <h2>
                    {post.title}
                </h2>
                <p>
                    {post.date}
                </p>
                <p>
                    {post.description}
                </p>
        </li>
    </>
  );
  } 
