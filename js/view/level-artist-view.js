import AbstractView from './abstract-view';
import initializePlayer from '../player.js';

export default class LevelArtistView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }
  get template() {    
    return `<section class="main main--level main--level-artist">      <div class="main-wrap">        <h2 class="title main-title">Кто исполняет эту песню?</h2>        <div class="player-wrapper"></div>        <form class="main-list"> 
    ${this.data.songs.map((answer) => this.createAnswer(answer)).join(``)}
    </form>
    </div>
    </section>`;
  }
  createAnswer(answer) {
    return `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.genre}" />
        <label class="main-answer" for="${answer.id}">
          <img class="main-answer-preview" src="${answer.imgPath}">
          ${answer.artist}
        </label>
      </div>`;
  }
  bind() {
    const screenLevelArtist = this.element;
    const answerCollection = screenLevelArtist.querySelectorAll(`.main-answer-r`);
    const playerWrapper = screenLevelArtist.querySelector(`.player-wrapper`);
    initializePlayer(playerWrapper, this.data.trueSong.filePath, true);
    for (const answer of answerCollection) {
      answer.addEventListener(`change`, this.onAnswerClick);
    }
  }
  onAnswerClick() {}
}