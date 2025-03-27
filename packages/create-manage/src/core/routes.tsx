import {
  createBrowserRouter,
  LoaderFunction,
  redirect
} from 'react-router-dom';
import { Create } from '../page/create';
import { Welcome } from '../page/welcome';
import { loginLoader } from '../page/login';
import { MainPanel } from '../molecule/main-panel';
import { loadAuthState } from './auth-context';
import { Manage } from '../page/manage';
import { Play } from '../page/play';
import { Account } from '../page/account';
import { CreateGame } from '../page/create-game';

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

export const routes = {
  fq: '/',
  index: '/',
  login: {
    fq: '/login',
    index: 'login'
  },
  authenticated: {
    fq: '/authenticated',
    index: 'authenticated',
    create: {
      fq: '/authenticated/create',
      index: 'create',
      game: {
        fq: '/authenticated/create/game',
        index: 'game'
      },
      map: {
        fq: '/authenticated/create/map',
        index: 'map'
      },
      entity: {
        fq: '/authenticated/create/entity',
        index: 'entity'
      }
    },
    manage: {
      fq: '/authenticated/manage',
      index: 'manage'
    },
    play: {
      fq: '/authenticated/play',
      index: 'play'
    },
    account: {
      fq: '/authenticated/account',
      index: 'account'
    }
  }
}

export const router = createBrowserRouter([{
  path: routes.index,
  element: <MainPanel />,
  children: [{
    index: true,
    element: <Welcome />,
    loader: publicRouteLoader
  }, {
    path: routes.login.index,
    loader: loginLoader
  }, {
    path: routes.authenticated.index,
    loader: privateRouteLoader,
    children: [{
      index: true,
      loader: async () => redirect(routes.authenticated.create.fq)
    }, {
      path: routes.authenticated.create.index,
      element: <Create />,
      children: [{
        path: routes.authenticated.create.game.index,
        element: <CreateGame />
      }, {
        path: routes.authenticated.create.map.index,
        element: <CreateGame />
      }]
    }, {
      path: routes.authenticated.manage.index,
      element: <Manage />
    }, {
      path: routes.authenticated.play.index,
      element: <Play />
    }, {
      path: routes.authenticated.account.index,
      element: <Account />
    }]
  }]
}], {
  future: {
    v7_relativeSplatPath: true
  }
});
