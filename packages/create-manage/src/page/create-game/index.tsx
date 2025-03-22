import { useViewTransitionState } from 'react-router-dom';
import { EncounterSymbol } from '../../atom/encounter-symbol';
import { PlayerSymbol } from '../../atom/player-symbol';
import './create-game.css';
import { routes } from '../../core/routes';

export const createGamePath = ['/authenticated', 'create', 'game'];

export function CreateGame() {
    return (
        <div className="creategame">
            create
        </div>
    )
}