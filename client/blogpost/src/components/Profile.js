import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user } = useAuth0();

  return (
      <div>
        <img className='profile_img' alt="Profile Picture" src={user.picture} />
        <h1>{user.nickname}</h1>
        <p><b>Id:</b> {user.sub}</p>
        <p><b>Email:</b> {user.email}</p>
      </div>
  )
}