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
            {/* {post.imageURLs.map(image => {
            <img src={image} alt='image'/>
            console.log(image)
            })} */}
            <img src= {post.imageURLs[0]} alt="images" />
            <p>
                {post.date}
            </p>
            
        </div>
    </li>
    </>
  );
  } 
