let state = {
  screen: `welcome`,
  questions: 3,
  currentQuestion: 0,
  timer: 120,
  lives: 3,
  score: 0,
  percentage: 0,
  statistics: [
    {time: 20, score: 10},
    {time: 32, score: 10},
    {time: 44, score: 10},
    {time: 20, score: 9},
    {time: 22, score: 8},
    {time: 50, score: 7},
    {time: 21, score: 6},
    {time: 40, score: 5},
    {time: 50, score: 4},
  ],
};

export const getState = () => state;
export const setState = (newState) => {
  state = newState;
};