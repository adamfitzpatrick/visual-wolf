import { EncounterSymbol } from '../../atom/encounter-symbol';
import { PlayerSymbol } from '../../atom/player-symbol';
import './create-game.css';

export const createGamePath = ['/authenticated', 'create', 'game'];

export function CreateGame() {
    return (
        <div className="creategame">
            <EncounterSymbol size={10} color='rgb(33, 99, 255)' hoverGlow />
        </div>
    )
}