let state = { 
  screen: `welcome`,
  lives: 3,
  timer: 120,
  currentQuestion: 0,
  questions: 5,
  score: 0,
  percentage: 0,
  statistics: [
    {time: 40, score: 10},
    {time: 80, score: 9},
    {time: 44, score: 10},
    {time: 30, score: 8},
    {time: 50, score: 0}
  ],
};
export const getState = () => state;
export const setState = (newState) => {
  state = newState;
};

