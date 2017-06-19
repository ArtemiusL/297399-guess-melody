import createDom from '../support/createDomElement';
import convertTime from '../support/convert-time';

export default (timer) => {

  const templateTimer = (time) => `<div class="timer">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${time.min}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${time.sec}</span>
      </div>
    </svg>
  </div>
  `;

  const screenCircle = createDom(templateTimer(convertTime(timer)));

  return screenCircle;
};