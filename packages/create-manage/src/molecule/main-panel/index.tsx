import { Outlet, redirect, useMatch } from 'react-router-dom';
import { Header } from '../../organism/header';
import { useEffect, useState } from 'react';
import {
  getAuthStateSetter,
  initializeAuthState,
  AuthState,
  defaultAuthState,
  AuthContext
} from '../../core/auth-context';

import './main-panel.css';

export function MainPanel() {
  const [ authState, reactSetAuthState ] = useState<AuthState>(defaultAuthState);

  useEffect(() => {
    initializeAuthState(reactSetAuthState);
  }, []);


  const setAuthState = getAuthStateSetter(reactSetAuthState);

  return (
    <div className='main-panel-wrapper'>
      <div className='main-panel'>
        <Header authState={authState} />
        <Outlet context={[ authState, setAuthState ] satisfies AuthContext} />
      </div>
    </div>
  )
}
