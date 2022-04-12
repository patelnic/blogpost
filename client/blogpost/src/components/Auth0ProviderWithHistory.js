import React from 'react';
import {Auth0Provider} from "@auth0/auth0-react";

export default function Auth0ProviderWithHistory({children}) {
  return ( 
    <Auth0Provider 
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        redirectUri={window.location.origin}
    >
    {children}
    </Auth0Provider>
  )
  
}
