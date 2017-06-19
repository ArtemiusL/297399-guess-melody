import getRandomScreenName from '../support/get-random-screen-name';
import getUniqueItemsFromArray from '../support/get-unique-items-from-array';
import computePercentage from '../support/computer-percentage';
import getRandomItem from '../support/get-random-item';
import songsData from '../data/tracks';


export function resetGame(state) {
  const newState = Object.assign({}, state, {
    screen: `welcome`,
    currentQuestion: 0,
    lives: 3,
    score: 0
  });
  return newState;
}

export function nextQuestion(state) {
  const newScreen = getRandomScreenName();
  let screenData;

  if (newScreen === `question-artist`) {
    const songs = getUniqueItemsFromArray(3, songsData);
    const trueSong = getRandomItem(songs);
    screenData = {
      songs,
      trueSong,
    };
  } else {
    const songs = getUniqueItemsFromArray(4, songsData);
    const trueSong = getRandomItem(songs);
    screenData = {
      songs,
      trueSong,
    };
  }

  return Object.assign({}, state, {
    currentQuestion: state.currentQuestion + 1,
    screen: newScreen,
    screenData,
  });
}

export function onQuestionAnswered(state, isAnswerCorrect) {
  const {currentQuestion, questions, timer, lives} = state;

  const isFinalQuestion = currentQuestion === questions;
  const newScore = state.score + (isAnswerCorrect ? 1 : 0);
  const newLives = isAnswerCorrect ? lives : lives - 1;

  if (newLives < 0 || timer <= 0) {

    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      currentQuestion: currentQuestion + 1,
      screen: `result-fail`,
    });
  }

  if (isFinalQuestion) {
    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      currentQuestion: currentQuestion + 1,
      screen: `result-success`,
      screenData: {
        percentage: computePercentage({
          time: state.secondsPassed,
          score: newScore,
          statistics: state.statistics,
        }),
      },
    });
  }

  return Object.assign({}, nextQuestion(state), {
    lives: newLives,
    score: newScore,
  });
}
