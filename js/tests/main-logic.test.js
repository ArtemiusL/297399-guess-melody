import {onQuestionAnswered, resetGame} from '../logic/main-logic';
import {initialState} from '../data/initalState';


import assert from 'assert';

describe(`onQuestionAnswered`, () => {

  it(`should end with result-fail cause of out of lives ))`, () => {
    const state = resetGame(initialState);
    state.lives = 0;
    state.time = 120;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert.equal(`result-fail`, newState.screen);
  });

  it(`should end with result-success cause of final question`, () => {
    const state = resetGame(initialState);
    state.lives = 3;
    state.questions = 3;
    state.currentQuestion = 3;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert.equal(`result-success`, newState.screen);
  });

  it(`should end with result-fail cause of out of time`, () => {
    const state = resetGame(initialState);
    state.lives = 3;
    state.currentQuestion = 1;
    state.timer = 0;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert.equal(`result-fail`, newState.screen);
  });

  it(`should continue`, () => {
    const state = resetGame(initialState);
    state.lives = 3;
    state.questions = 7;
    state.currentQuestion = 1;
    state.timer = 100;
    const isAnswerCorrect = false;
    const newState = onQuestionAnswered(state, isAnswerCorrect);
    assert(`question-artist` === newState.screen || `question-genre` === newState.screen);
  });

});
