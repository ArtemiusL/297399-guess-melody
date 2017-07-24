import TimerView from '../view/timer-view';

export default (time) => {
  const showTimer = new TimerView(time);

  return showTimer.element;
};