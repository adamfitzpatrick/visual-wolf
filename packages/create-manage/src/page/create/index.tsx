import { useMatch } from 'react-router-dom';
import { routes } from '../../core/routes';
import { SymbolStepLink, SymbolType } from '../../molecule/symbol-step-link';
import { useEffect, useState } from 'react';

import './create.css'
import classNames from 'classnames';

const symbolSets: { [key: string]: SymbolType[] } = {
  notCreating: ['game', 'map', 'entity'],
  game: ['game', 'player', 'encounter'],
  map: ['map', 'player', 'encounter'],
  entity: ['entity', 'player', 'encounter']
}

const delayFunction = async (time: number = 10) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(''), time)
  })
}

const ANIMATION_DELAY = 400;

export function Create() {
  const [symbolSize, setSymbolSize] = useState<'large' | 'small'>('large');
  const [symbolSet, setSymbolSet] = useState<SymbolType[]>(symbolSets.notCreating)
  const [prevCreateType, setPrevCreateType] = useState<SymbolType | null>(null);
  const [guideClasses, setGuideClasses] = useState<string>('creation-guide');
  const [cleanFromAnimations, setCleanFromAnimations] = useState<boolean>(true);
  const isCreating = !useMatch({ path: routes.authenticated.create.fq, end: true })
  const createType = useMatch({ path: routes.authenticated.create.fq + '/*', end: true })?.params['*'];
  const localRoutes = routes.authenticated.create as unknown as { [key: string]: { fq: string }};

  const updateSymbolSet = () => {
    if (!isCreating) {
      setSymbolSet(symbolSets.notCreating);
    } else {
      setSymbolSet(symbolSets[createType!]);
    }
  }

  const getLinkTo = (symbol: SymbolType) => {
    if (!isCreating) {
      return (localRoutes[symbol] && localRoutes[symbol].fq) || '';
    } else {
      return symbolSets[createType!][0] === symbol ? routes.authenticated.create.fq : ''
    }
  }

  const getSymbolClasses = (symbol: SymbolType) => {
    const vanishingCondition = !cleanFromAnimations && (isCreating && symbol !== createType &&
      symbolSet === symbolSets.notCreating) || (!isCreating && prevCreateType &&
      symbol !== prevCreateType && symbolSet !== symbolSets.notCreating);
    const appearingCondition = !cleanFromAnimations && (prevCreateType && !isCreating &&
      symbol !== prevCreateType && symbolSet === symbolSets.notCreating) ||
      (isCreating && symbol !== createType && symbolSet !== symbolSets.notCreating)
    return classNames('create-symbol-step', {
      'vanishing': vanishingCondition,
      'appearing': appearingCondition
    });
  }

  const getSymbolSize = (symbol: SymbolType) => {
    const createTypeSymbolCondition = isCreating && createType === symbol;
    const createMemberSymbolCondition = (createType || prevCreateType) !== symbol && symbolSet !== symbolSets.notCreating;
    if (createTypeSymbolCondition || createMemberSymbolCondition) {
      return 'small';
    }
    return 'large'
  }

  const onCreate = async () => {
    setCleanFromAnimations(false);
    setGuideClasses('creation-guide');
    await delayFunction();
    setPrevCreateType(createType as SymbolType);
    setSymbolSize('small');
    setGuideClasses('creation-guide creating');
    await delayFunction(ANIMATION_DELAY);
    setGuideClasses('creation-guide create-no-anim');
    updateSymbolSet();
    await delayFunction(ANIMATION_DELAY);
    setCleanFromAnimations(true);
  }

  const onStopCreating = async () => {
    if (prevCreateType) {
      setCleanFromAnimations(false);
      await delayFunction();
      setSymbolSize('large');
      setGuideClasses('creation-guide end-creating');
      updateSymbolSet();
      await delayFunction(ANIMATION_DELAY);
      setCleanFromAnimations(true)
    }
  }

  useEffect(() => {
    if (isCreating) {
      onCreate();
    } else {
      onStopCreating();
    }
  }, [isCreating]);

  const renderSymbols = () => {
    return symbolSet.map(symbol => {
      const noAnimation = isCreating && symbol !== createType &&
        symbolSet !== symbolSets.notCreating && symbolSet.includes(symbol);
      const to = getLinkTo(symbol);
      return (
        <SymbolStepLink
          key={symbol}
          symbol={symbol}
          size={getSymbolSize(symbol)}
          to={to}
          noAnimation={noAnimation}
          className={getSymbolClasses(symbol)} />
      );
    })
  }

  return (
    <div className='create'>
      <div className={guideClasses}>
        {renderSymbols()}
      </div>
    </div>
  )
}
