import {
  createBrowserRouter,
  LoaderFunction,
  redirect
} from 'react-router-dom';
import { createPath, Create } from '../page/create';
import { welcomePath, Welcome } from '../page/welcome';
import { loginPath, loginLoader } from '../page/login';
import { MainPanel } from '../molecule/main-panel';
import { loadAuthState } from './auth-context';
import { Manage, managePath } from '../page/manage';
import { Play, playPath } from '../page/play';
import { accountPath, Account } from '../page/account';
import { CreateGame, createGamePath } from '../page/create-game';

const publicRouteLoader = async () => {
  const auth = loadAuthState();
  if (auth?.username) {
    return redirect('/authenticated')
  }
  return null;
}

const privateRouteLoader: LoaderFunction = async () => {
  const auth = loadAuthState();
  if (!auth?.username) {
    return redirect('/');
  }
  return null;
}

export const router = createBrowserRouter([{
  path: welcomePath[0],
  element: <MainPanel />,
  children: [{
    index: true,
    element: <Welcome />,
    loader: publicRouteLoader
  }, {
    path: loginPath[1],
    loader: loginLoader
  }, {
    path: '/authenticated',
    loader: privateRouteLoader,
    children: [{
      index: true,
      loader: async () => redirect('/authenticated/create')
    }, {
      path: 'create',
      element: <Create />,
    }, {
      path: 'manage',
      element: <Manage />
    }, {
      path: 'play',
      element: <Play />
    }, {
      path: 'account',
      element: <Account />
    },{
      path: 'create/game',
      element: <CreateGame />
    }]
  }]
}], {
  future: {
    v7_relativeSplatPath: true
  }
});
