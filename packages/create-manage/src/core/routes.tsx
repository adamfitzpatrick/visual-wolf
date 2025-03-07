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
    path: createPath[0],
    loader: privateRouteLoader,
    children: [{
      index: true,
      loader: async () => redirect(createPath.join('/'))
    }, {
      path: createPath[1],
      element: <Create />,
      children: [{
        path: createGamePath[2],
        element: <CreateGame />
      }]
    }, {
      path: managePath[1],
      element: <Manage />
    }, {
      path: playPath[1],
      element: <Play />
    }, {
      path: accountPath[1],
      element: <Account />
    }]
  }]
}], {
  future: {
    v7_relativeSplatPath: true
  }
});
