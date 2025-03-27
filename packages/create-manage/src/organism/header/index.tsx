import { UserOutlined } from '@ant-design/icons';
import { PropsWithoutRef } from 'react';
import { Logo } from '../../atom/logo';
import classnames from 'classnames';
import { AuthState } from '../../core/auth-context';
import { Link, NavLink, useMatch, } from 'react-router-dom';
import { routes } from '../../core/routes';

import './header.css';

interface HeaderProps {
  authState?: AuthState
}


export function Header(props: PropsWithoutRef<HeaderProps>) {
  const toCreate = routes.authenticated.create.fq;
  const toManage = routes.authenticated.manage.fq;
  const toPlay = routes.authenticated.play.fq
  const toAccount = routes.authenticated.account.fq
  
  function getClasses() {
    return classnames('header__active-marker', {
      'header__active-marker-create': useMatch(toCreate),
      'header__active-marker-manage': useMatch(toManage),
      'header__active-marker-play': useMatch(toPlay),
      'header__active-marker-account': useMatch(toAccount)
    });
  }

  function getMenu() {
    if (props.authState?.username) {
      return (
        <div className='header__menu'>
          <div className={getClasses()} />
          <NavLink className='header__menu-item' to={toCreate}>create</NavLink>
          <NavLink className='header__menu-item' to={toManage}>manage</NavLink>
          <NavLink className='header__menu-item' to={toPlay}>play</NavLink>
          <NavLink className='header__menu-item' to={toAccount}><UserOutlined /></NavLink>
        </div>
      )
    } else {
      return null;
    }
  }
  return (
    <header className='header'>
      <Logo />
      {getMenu()}
    </header>
  )
}
