import { NavLink } from 'react-router-dom';
import { GameSymbol } from '../../atom/game-symbol';
import { PropsWithoutRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { MapSymbol } from '../../atom/map-symbol';
import { EntitySymbol } from '../../atom/entity-symbol';
import { PlayerSymbol } from '../../atom/player-symbol';
import { EncounterSymbol } from '../../atom/encounter-symbol';

import './symbol-step-link.css';

export type SymbolType = 'game' | 'map' | 'entity' | 'player' | 'encounter';

const symbols = {
  game: (size: number) => <GameSymbol size={size} />,
  map: (size: number) => <MapSymbol size={size} />,
  entity: (size: number) => <EntitySymbol size={size} />,
  player: (size: number) => <PlayerSymbol size={size} />,
  encounter: (size: number) => <EncounterSymbol size={size} />,
}

const renderSymbol = (symbol: SymbolType, size: number) => {
  return symbols[symbol](size);
}

const getTitle = (symbol: SymbolType) => symbol[0].toUpperCase() + symbol.slice(1);

const delayFunction = async (time: number = 10) => {

  return new Promise(resolve => {
    setTimeout(() => resolve(''), time);
  });
}

interface SymbolStepLinkProps {
  to: string;
  symbol: SymbolType;
  size: 'large' | 'small';
  className?: string;
  noAnimation?: boolean;
}

export function SymbolStepLink(props: PropsWithoutRef<SymbolStepLinkProps>) {
  const [stepClasses, setStepClasses] = useState<string>('symbol-step');
  const [hasShrunk, setHasShrunk] = useState<boolean>(false);

  const onSetSmall = async () => {
    if (!props.noAnimation) {
      setHasShrunk(true);
      setStepClasses('symbol-step small');
      await delayFunction(1000);
    }
    setStepClasses('symbol-step small-no-anim');
  }

  const onSetLarge = async () => {
    if (!props.noAnimation) {
      setStepClasses('symbol-step reenlarged');
      await delayFunction(1000);
    }
    setStepClasses('symbol-step')
  }

  useEffect(() => {
    const baseStepClass = 'symbol-step';
    if (props.size === 'small') {
      onSetSmall();
    } else if (hasShrunk) {
      onSetLarge();
    } else {
      setStepClasses(baseStepClass);
    }
  }, [props.size])

  const getSpecificStepClass = (type: SymbolType) => {
    return classNames(stepClasses, props.className, type);
  }

  return (
    <NavLink to={props.to} className={getSpecificStepClass(props.symbol)}>
      {renderSymbol(props.symbol, 8)}
      <span className='title'>{getTitle(props.symbol)}</span>
    </NavLink>
  )
}
