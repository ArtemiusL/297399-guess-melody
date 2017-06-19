const clearTimer = () => {
  const app = document.querySelector(`.app`);
  const timer = app.querySelector(`.timer`);
  const timerTemplate = document.createElement(`section`);
  timerTemplate.classList.add(`timer`);
  app.replaceChild(timerTemplate, timer);
};

export default clearTimer;