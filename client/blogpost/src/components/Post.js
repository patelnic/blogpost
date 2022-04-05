import React from 'react';


export default function Post({post}) {
  return ( 
    <li>
        <div className = "post">
            <p>
                {post.title}
            </p>
            <p>
                {post.date}
            </p>
            <p>
                {post.details}
            </p>
        </div>
    </li>
  )
}
