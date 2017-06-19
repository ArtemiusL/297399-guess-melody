import createDom from '../support/createDomElement';

export default ({onClickReplay}) => {
  const template = `<section class="main">
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы проиграли</h2>
      <div class="main-stat">Ничего, вам повезет в следующий раз</div>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
  </section>`;

  const screenResultFail = createDom(template);

  const replayButton = screenResultFail.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, onClickReplay);

  return screenResultFail;
};

