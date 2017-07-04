import createDom from '../support/createDomElement';
import initializePlayer from '../player.js';

export default ({songs, trueSong, answerCallback}) => {

  const templateAnswer = (answer) => `
    <div class="genre-answer">
    <div class="player-wrapper" data-track="${answer.filePath}"></div>
    <input type="checkbox" name="answer" value="${answer.genre}" " id="${answer.id}">
    <label class="genre-answer-check" for="${answer.id}"></label>
  </div>`;


  const templateMain = `<section class="main">
    <section class="main main--level main--level-genre">
      <h2 class="title">Выберите ${trueSong.genre} треки</h2>
      <form class="genre">
        ${songs.map((answer) => templateAnswer(answer)).join(``)}
        <button type="button" class="genre-answer-send" disabled>Ответить</button>
      </form>
    </section>
  </section>`;

  const screenLevelGenre = createDom(templateMain);

  const playerWrappers = screenLevelGenre.querySelectorAll(`.player-wrapper`);
  const checkboxes = screenLevelGenre.querySelectorAll(`input[name="answer"]`);
  const answerSend = screenLevelGenre.querySelector(`.genre-answer-send`);

  playerWrappers.forEach((wrapper) => initializePlayer(wrapper, wrapper.dataset.track, false));
  let trueChecks = 0;
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener(`change`, function () {
      trueChecks += (checkbox.checked ? 1 : -1);
      if (trueChecks === 0) {
        answerSend.setAttribute(`disabled`, ``);
      } else {
        answerSend.removeAttribute(`disabled`);
      }
    });
  });

  const checkAnswer = () => {
    for (let i = 0; checkboxes.length; i++) {
      const answerGenre = checkboxes[i].value;
      const trueGenre = trueSong.genre;

      if ((checkboxes[i].checked && answerGenre !== trueGenre) || (!checkboxes[i].checked && answerGenre === trueGenre)) {
        return false;
      }
    }
    return true;
  };

  const onAnswerClick = function (event) {
    answerCallback(checkAnswer());
  };

  answerSend.addEventListener(`click`, onAnswerClick);

  return screenLevelGenre;
};
