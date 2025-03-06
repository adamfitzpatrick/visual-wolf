import { EntitySymbol } from '../../atom/entity-symbol';
import { GameSymbol } from '../../atom/game-symbol'
import { MapSymbol } from '../../atom/map-symbol'
import './create.css'

export const createPath = ['/authenticated', 'create'];

export function Create() {
  return (
    <div className='create'>
      <button className='create__step create__step-game'>
        <div className='create__step-inner create__step-inner-game'>
          <GameSymbol color="rgb(255, 0, 80)" size={8}/>
          <div className='create__step-title'>Game</div>
        </div>
      </button>
      <button className='create__step create__step-map'>
        <div className='create__step-inner create__step-inner-map'>
          <MapSymbol color="rgb(255, 33, 255)" size={8}/>
          <div className='create__step-title'>Map</div>
        </div>
      </button>
      <button className='create__step create__step-entity'>
        <div className='create__step-inner create__step-inner-entity'>
          <EntitySymbol color="rgb(33, 99, 255)" size={8}/>
          <div className='create__step-title'>Entity</div>
        </div>
      </button>
    </div>
  )
}
