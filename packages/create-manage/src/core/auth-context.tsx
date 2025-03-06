import { Dispatch, SetStateAction, PropsWithChildren, useEffect, useState } from "react";

const AUTH_STATE_STORAGE_KEY = 'visualWolfAuthState';

export interface AuthState {
  username: string | null;
  email: string | null;
  accessToken: string | null;
  idToken: string | null;
}

export const defaultAuthState: AuthState = {
  username: null,
  email: null,
  accessToken: null,
  idToken: null
}

interface SetAuthState {
  (authState: AuthState): void;
}

export type AuthContext = [ AuthState, SetAuthState ]

export function loadAuthState(): AuthState {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STATE_STORAGE_KEY)!);
  } catch {
    return defaultAuthState
  }
}

export function saveAuthState(authState: AuthState) {
  localStorage.setItem(AUTH_STATE_STORAGE_KEY, JSON.stringify(authState));
}

export const initializeAuthState = (setAuthState: (authState: AuthState) => void) => {
  setAuthState(loadAuthState());
}

export const getAuthStateSetter = (setAuthState: Dispatch<SetStateAction<AuthState>>) => (newAuthState: AuthState) => {
  saveAuthState(newAuthState);
  setAuthState(newAuthState);
}
