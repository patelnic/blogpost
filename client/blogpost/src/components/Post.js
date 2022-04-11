import React from 'react';
import '../App.css'
import CreatePost from './CreatePost';
import {Link} from 'react-router-dom';
export default function Post({post}) {
  return ( 
    <>
    <li>
        <img className = "blog_post_image" src= {post.images} alt="images" />
            <Link to = {'/' + post._id}><h2 className = "align-left">{post.title}</h2></Link>
            <p className = "align-left">
                {post.description}
            </p>
            <p className="date_form">
                {post.date}
            </p>
    </li>
    </>
  );
  } 
