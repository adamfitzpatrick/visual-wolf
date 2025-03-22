import { EntitySymbol } from '../../atom/entity-symbol';
import { GameSymbol } from '../../atom/game-symbol'
import { MapSymbol } from '../../atom/map-symbol'
import { Link, NavLink, Outlet, useMatch, useViewTransitionState } from 'react-router-dom';
import { routes } from '../../core/routes';

import './create.css'
import { RenderFunction } from 'antd/es/_util/getRenderPropValue';
import { useEffect, useState } from 'react';

export function Create() {
  const [iconSize, setIconSize] = useState<number>(8);
  const [stepsClass, setStepsClass] = useState<string>('create-steps');

  const { game, map, entity } = routes.authenticated.create;
  const routeMatches = {
    create: useMatch(routes.authenticated.create.fq),
    game: useMatch(game.fq),
    map: useMatch(map.fq),
    entity: useMatch(entity.fq)
  };

  useEffect(() => {
    routeMatches.create ? setIconSize(8) : shrink()
  }, [routeMatches]);

  function shrink() {
    setIconSize(3);
  }

  const renderGameSymbol = () => <GameSymbol color={'rgb(255, 0, 80)'} size={iconSize} />;
  const renderMapSymbol = () => <MapSymbol color='rgb(255, 33, 255)' size={iconSize} />;
  const renderEntitySymbol = () => <EntitySymbol color='rgb(33, 99, 255)' size={iconSize} />;

  function shouldShowLink(route: keyof typeof routeMatches) {
    return routeMatches.create || routeMatches[route]
  }

  function getLink(name: keyof typeof routeMatches, target: string, renderSymbol: RenderFunction) {
    const text = name[0].toUpperCase() + name.slice(1);
    if (shouldShowLink(name)) {
      return (
        <NavLink className={`create__step create__step-${name}`} to={target} viewTransition>
          <div className={`create__step-inner create__step-inner-${name}`}>
            {renderSymbol()}
            <div className='create__step-title'>{text}</div>
          </div>
        </NavLink>
      )
    }
    return null;
  }

  return (
    <div className='create'>
      <div className={stepsClass}>
        { getLink('game', game.index, renderGameSymbol) }
        { getLink('map', map.fq, renderMapSymbol) }
        { getLink('entity', entity.fq, renderEntitySymbol) }
      </div>
      <Outlet />
    </div>
  )
}
