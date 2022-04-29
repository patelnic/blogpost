import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom';


export default function Post({post, deleteBlogPost}) {
  let text = post.description;
  if (text != null && text.length > 250) {
    text = text.slice(0, 250) + '...'
  }

  return ( 
    <>
    <li>
        <img className = "blog_post_image" src= {post.images} alt="images" />
            <Link to = {'/' + post._id}><h2 className = "align-left">{post.title}</h2></Link>
            <p id = 'post_details' className = "align-left">
              {text}
            </p>
            <p className="date_form">
                {post.date}
            </p>
    </li>
    </>
  );
  } 
