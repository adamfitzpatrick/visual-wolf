import { useContext, useEffect, useState } from 'react';

import './login.css'
import { LoaderFunction, redirect } from 'react-router-dom';
import { saveAuthState } from '../../core/auth-context';

export const loginPath = ['/', 'login'];

interface CognitoJwtPayload {
  sub: string;
  email: string;
}

const ID_TOKEN_PARAM = 'id_token';
const ACCESS_TOKEN_PARAM = 'access_token';

function decode(token: string) {
  const [headerEncoded, payloadEncoded, signature] = token.split('.');
  if (!(headerEncoded && payloadEncoded && signature)) {
    throw new Error('Invalid JWT format');
  }

  return JSON.parse(atob(payloadEncoded)) as CognitoJwtPayload;
}

function parseAuthData() {
  const url = new URL(window.location.href.replace('#', '?'));
  const idToken = url.searchParams.get(ID_TOKEN_PARAM);
  const accessToken = url.searchParams.get(ACCESS_TOKEN_PARAM);

  if (!idToken || !accessToken) {
    throw new Error('Missing ID or access token');
  }

  const tokenData = decode(idToken);
  
  return {
    username: tokenData.sub,
    email: tokenData.email,
    accessToken,
    idToken
  }
}

export const loginLoader: LoaderFunction = () => {
  saveAuthState(parseAuthData());
  return redirect('/authenticated');
}
