import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function LoginButton() {
  const {loginWithRedirect} = useAuth0();
  return (
    <button onClick={() => loginWithRedirect({screen_hint:"signup"})}>Login</button>
  )
}
