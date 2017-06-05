import createDom from '../createDomElement';
import drawSection from '../draw-section';
import artistScreen from './main-artist';

const screen = createDom(`<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`);

const playBtn = screen.querySelector(`.main-play`);
playBtn.addEventListener(`click`, function(event){
	event.preventDefault();
	drawSection(artistScreen);
}  );


export default screen;