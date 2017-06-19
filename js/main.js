import {getState, setState} from './data/initalState';
import {resetGame} from './logic/main-logic';
import {renderState} from './logic/render';

setState(resetGame(getState()));
renderState();


