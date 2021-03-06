import createDom from '../createDomElement';
import drawSection from '../draw-section';
import genreScreen from './main-genre';
import questions from '../questions';

const artistScreen = (currentQuestion) => `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
      ${[...currentQuestion.answers].map((answer, item) =>
       `<div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${item + 1}" name="answer" value="val-${item + 1}" />
          <label class="main-answer" for="answer-${item + 1}">
            <img class="main-answer-preview" src="">
            ${answer.value}
          </label>
        </div>`)}
      </form>
    </div>
  </section>`;

const mainArtist = createDom(artistScreen(questions[0]));

const answers = [...mainArtist.querySelectorAll(`.main-answer`)];
answers.forEach(function (answer) {
  answer.addEventListener(`click`, function (event) {
    event.preventDefault();
    drawSection(genreScreen);
  }
		);
});
export default mainArtist;
