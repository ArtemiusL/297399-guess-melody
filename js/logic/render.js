import {getState, setState} from '../data/initalState';
import {resetGame, nextQuestion, onQuestionAnswered} from './main-logic';
import initializeCountdown from '../timer.js';

import screenWelcome from '../screenModules/main-welcom';
import screenLevelArtist from '../screenModules/main-artist';
import screenLevelGenre from '../screenModules/main-genre';
import screenLevelSuccess from '../screenModules/main-result-luck';
import screenLevelFail from '../screenModules/main-result-fail';
import screenTimer from '../screenModules/screen-timer';
import clearTimer from '../support/clear-timer';

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
      return renderScreen(screenWelcome({
        onPlayClick: () => {
          setState(nextQuestion(getState()));
          renderState();
          renderTimer(screenTimer(state.timer));
          initializeCountdown(0, 1000, state.timer);
        }
      }));

    case `question-artist`:
      return renderScreen(screenLevelArtist({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `question-genre`:
      return renderScreen(screenLevelGenre({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `result-success`:
      clearTimer();
      return renderScreen(screenLevelSuccess({
        totalScore: state.score,
        percentage: state.screenData.percentage,
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));

    case `result-fail`:
      clearTimer();
      return renderScreen(screenLevelFail({
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));
  }
  return null;
}
