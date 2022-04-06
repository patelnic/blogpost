import React from 'react';
import '../App.css'
import CreatePost from './CreatePost';
import {Link} from 'react-router-dom';
export default function Post({post}) {
  return ( 
    <>
    <li>
        <img className = "blog_post_image" src= {post.imageURLs[0]} alt="images" />
            <Link to = {'/' + post._id}><h2>{post.title}</h2></Link>
            <p>
                {post.description}
            </p>
            <p>
                {post.date}
            </p>
    </li>
    </>
  );
  } 
