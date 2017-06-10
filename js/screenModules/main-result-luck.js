import createDom from '../createDomElement';
import drawSection from '../draw-section';
import screen from './main-welcom.js';
import resultData from '../results-data';

const luckResult = (statistic) => `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;${statistic.minutes}&nbsp;минуты<br>вы&nbsp;отгадали ${statistic.melodies}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${statistic.percent}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const finalResultLuck = createDom(luckResult(resultData));
const replayBtn = finalResultLuck.querySelector('.main-replay');
replayBtn.addEventListener(`click`, function(event){
	event.preventDefault();
	drawSection(screen);
})

export default finalResultLuck;