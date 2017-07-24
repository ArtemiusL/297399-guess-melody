import AbstractView from './abstract-view';
import initializePlayer from '../player.js';

export default class LevelGenreView extends AbstractView {
  constructor(data, answers) {
    super();
    this.data = data;
    this.answers = answers;
  }
  get template() {
    return `<section class="main">
      <section class="main main--level main--level-genre">
        <h2 class="title">Выберите ${this.data.trueSong.genre} треки</h2>
        <form class="genre">
          ${this.data.songs.map((answer) => this.createAnswer(answer)).join(``)}
          <button class="genre-answer-send" disabled>Ответить</button>
        </form>
      </section>
    </section>`;
  }
  createAnswer(answer) {
    return `
      <div class="genre-answer">
      <div class="player-wrapper" data-track="${answer.filePath}"></div>
      <input type="checkbox" name="answer" value="${answer.genre}" " id="${answer.id}">
      <label class="genre-answer-check" for="${answer.id}"></label>
    </div>`;
  }
  bind() {
    const screenLevelGenre = this.element;
    const playerWrappers = screenLevelGenre.querySelectorAll(`.player-wrapper`);
    const checkboxes = screenLevelGenre.querySelectorAll(`input[name="answer"]`);
    const answerSend = screenLevelGenre.querySelector(`.genre-answer-send`);

    playerWrappers.forEach((wrapper) => initializePlayer(wrapper, wrapper.dataset.track, false));

    let answers = [];

    this.answers = answers;

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener(`change`, function () {
        if (checkbox.checked) {
          answerSend.removeAttribute(`disabled`);
          answers.push(checkbox.value);
        } else {
          answerSend.setAttribute(`disabled`, ``);
          answers.splice(answers.indexOf(checkbox.value), 1);
        }

      });
    });
    answerSend.addEventListener(`click`, this.onAnswerClick);
  }
 
 onAnswerClick() {}
}