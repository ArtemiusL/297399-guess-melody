import {getState, setState} from './data/game-state';
import {resetGame} from './controllers/logic-controller';
import {renderState} from './controllers/renderer';

setState(resetGame(getState()));
renderState();


