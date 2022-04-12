import React from 'react';
import Post from "./Post";


export default function PostList({postsList, deleteBlogPost}) {
  return (
      <>
          {postsList.map((post) => (
              <Post key = {post._id} post = {post} deleteBlogPost= {deleteBlogPost}/>
          ))}
      </>
  )
}
