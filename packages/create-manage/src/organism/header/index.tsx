import { UserOutlined } from '@ant-design/icons';
import { PropsWithoutRef } from 'react';
import { Logo } from '../../atom/logo';
import classnames from 'classnames';
import { AuthState } from '../../core/auth-context';
import { Link, useMatch, useMatches } from 'react-router-dom';
import { createPath } from '../../page/create';
import { managePath } from '../../page/manage';

import './header.css';
import { playPath } from '../../page/play';
import { accountPath } from '../../page/account';

interface HeaderProps {
  authState?: AuthState
}

const toCreate = createPath.join('/');
const toManage = managePath.join('/');
const toPlay = playPath.join('/');
const toAccount = accountPath.join('/');

export function Header(props: PropsWithoutRef<HeaderProps>) {
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
          <Link className='header__menu-item' to={toCreate} relative='route'>create</Link>
          <Link className='header__menu-item' to={toManage}>manage</Link>
          <Link className='header__menu-item' to={toPlay}>play</Link>
          <Link className='header__menu-item' to={toAccount}><UserOutlined /></Link>
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
