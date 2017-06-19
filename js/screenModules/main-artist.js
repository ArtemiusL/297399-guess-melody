import createDom from '../support/createDomElement';
import initializePlayer from '../player.js';

export default ({songs, trueSong, answerCallback}) => {

  const templateAnswer = (answer) => `<div class="main-answer-wrapper">
      <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.genre}" />
      <label class="main-answer" for="${answer.id}">
        <img class="main-answer-preview" src="${answer.imgPath}">
        ${answer.artist}
      </label>
    </div>`;

  const templateMain = `<section class="main main--level main--level-artist">
    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${songs.map((answer) => templateAnswer(answer)).join(``)}
      </form>
    </div>
  </section>`;

  const screenLevelArtist = createDom(templateMain);

  const answerCollection = screenLevelArtist.querySelectorAll(`.main-answer-r`);
  const playerWrapper = screenLevelArtist.querySelector(`.player-wrapper`);

  initializePlayer(playerWrapper, trueSong.filePath, true);


  const checkAnswer = function (element) {
    const answerID = +element.id;
    const currentID = trueSong.id;

    if (answerID === currentID) {
      return true;
    } else {
      return false;
    }
  };

  const onAnswerClick = function (event) {
    const answer = checkAnswer(event.target);
    answerCallback(answer);
  };

  for (const answer of answerCollection) {
    answer.addEventListener(`change`, onAnswerClick);
  }

  return screenLevelArtist;
};