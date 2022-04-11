import React from 'react';
import {Auth0Provider} from "@auth0/auth0-react";
import { BrowserRouter } from 'react-router-dom';

export default function Auth0ProviderWithHistory({children}) {
  return ( 
    <BrowserRouter>
    <Auth0Provider 
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        redirectUri={window.localStorage}
    >
    {children}
    </Auth0Provider>
    </BrowserRouter>
  )
  
}
