import getRandomScreenName from '../support/get-random-screen-name';
import getUniqueItemsFromArray from '../support/get-unique-items-from-array';
import computePercentage from '../support/computer-percentage';
import getRandomItem from '../support/get-random-item';
import songsData from '../data/tracks';


export function resetGame(state) {
  return Object.assign({}, state);
}

export function nextQuestion(state) {
  const newScreen = getRandomScreenName();
  let screenData;
  const songs = getUniqueItemsFromArray(
    (newScreen === `question-artist` ? 3 : 4),
      songsData
  );
  const trueSong = getRandomItem(songs);
  screenData = {
    songs,
    trueSong,
  };

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
