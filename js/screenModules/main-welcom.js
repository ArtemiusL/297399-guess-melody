import createDom from '../support/createDomElement';

export default ({onPlayClick}) => {

  const template = `<section class="main">
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;2 минуты дать
        максимальное количество правильных ответов.<br>
        Удачи!
      </p>
    </section>
  </section>`;

  const screenWelcome = createDom(template);

  const playButton = screenWelcome.querySelector(`.main-play`);

  playButton.addEventListener(`click`, onPlayClick);

  return screenWelcome;
};
