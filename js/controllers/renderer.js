import {getState, setState} from '../data/game-state';

import {resetGame, nextQuestion, onQuestionAnswered} from './logic-controller';
import initializeCountdown from '../timer.js';

import welcome from '../screens/welcome';
import levelArtist from '../screens/level-artist';
import levelGenre from '../screens/level-genre';
import resultSuccess from '../screens/result-success';
import resultFail from '../screens/result-fail';
import showTimer from '../screens/show-timer';

import convertTime from '../utils/convert-time';
import clearTimer from '../utils/clear-timer';


const app = document.querySelector(`.app`);
let currentScreen;
let timer;

const renderScreen = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

const renderTimer = function (template) {
  timer = app.querySelector(`.timer`);
  app.replaceChild(template, timer);
};

export function renderState() {
  const state = getState();

  switch (state.screen) {

    case `welcome`:
      return renderScreen(welcome({
        onPlayClick: () => {
          setState(nextQuestion(getState()));
          renderState();
          renderTimer(showTimer(convertTime(state.timer)));
          initializeCountdown(0, 1000, state.timer);
        }
      }));

    case `question-artist`:
      return renderScreen(levelArtist({
        data: state.screenData,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `question-genre`:
      return renderScreen(levelGenre({
        data: state.screenData,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `result-success`:
      clearTimer();
      return renderScreen(resultSuccess({
        totalScore: state.score,
        percentage: state.screenData.percentage,
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));

    case `result-fail`:
      clearTimer();
      return renderScreen(resultFail({
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));
  }
  return null;
}