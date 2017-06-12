import createDom from '../createDomElement';
import drawSection from '../draw-section';
import luckResult from './main-result-luck';
import failResult from './main-result-fail';
import tracks from '../tracks';

const genreScreen = (question) => `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите ${question.genre} треки</h2>
    <form class="genre">
    ${[...question.melodies].map((melodie, item) => `<div class="genre-answer">
        <div class="player-wrapper" data-track="${melodie.file}"></div>
        <input type="checkbox" name="answer" value="answer-${item + 1}" id="a-${item + 1}">
        <label class="genre-answer-check" for="a-${item + 1}"></label>
      </div>`
      )
    }
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`;

const mainGenre = createDom(genreScreen(tracks[0]));

const playersElements = [...mainGenre.querySelectorAll(`.player-wrapper`)];

playersElements.forEach(function (currentPlayer) {
  window.initializePlayer(currentPlayer, currentPlayer.dataset.track, false);
});

const genreForm = mainGenre.querySelector(`.genre`);
const answerBtn = mainGenre.querySelector(`.genre-answer-send`);
answerBtn.setAttribute(`disabled`, ` `);

genreForm.addEventListener(`click`, function (event) {
  const element = event.target;
  const checkList = [...mainGenre.querySelectorAll(`input[name="answer"]:checked`)];
  if (element.tagName !== `INPUT`) {
    return;
  }
  if (checkList.length) {
    answerBtn.removeAttribute(`disabled`);
  } else {
    answerBtn.setAttribute(`disabled`, ` `);
  }
});

answerBtn.addEventListener(`click`, function (event) {
  event.preventDefault();
  if (Math.round(Math.random() * 10) > 5) {
    drawSection(luckResult);
  } else {
    drawSection(failResult);
  }
});
export default mainGenre;

