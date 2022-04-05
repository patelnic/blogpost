import React from 'react';
import '../App.css'
import CreatePost from './CreatePost';

export default function Post({post}) {
  return ( 
    <>
    <li>
        <div className = "post">
            <p>
                {post.title}
            </p>
            <p>
                {post.description}
            </p>
            <img src= {post.images} alt="images" />
            <p>
                {post.date}
            </p>
            
        </div>
    </li>
    </>
  );
  } 
