import { LoaderFunction, RouterProvider } from 'react-router-dom';
import { Backdrop } from '../../molecule/backdrop';
import { router } from '../routes';

import './app.css';


export function App() {
  return (
    <div className='app'>
      <Backdrop />
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </div>
  )
}
