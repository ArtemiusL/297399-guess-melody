/**
*Шаблон экранов
*/
const template = document.querySelector(`#templates`).content;

/**

*Список экранов в нужном порядке
*/
const sectionList = [
  `.main--welcome`,  
  `.main--level-genre`,
  `.main--level-artist`,
  `.main--result`
].map((selector) => { 
  return template.querySelector(selector); 
}); 

/**
*Контейнер отрисовки
*/
const container = document.querySelector(`.main`);

/**
*Отрисовка первого экрана
*/
container.appendChild(sectionList[0]);

let numberSection = 0;

/**
*Ф-ция отрисовки экранов по номеру
*@param {Object} event
*/
const drawSection = (event) => {
  if (event.keyCode === 37 && numberSection > 0) {
    numberSection--;
    container.replaceChild(sectionList[numberSection], container.firstChild);
  }
  if (event.keyCode === 39 && numberSection < sectionList.length - 1) {
    numberSection++;
    container.replaceChild(sectionList[numberSection], container.firstChild);
  }
};

/**
*Ловим событbt нажатия alt+(</>) 
*/
document.addEventListener(`keydown`, function (event) {
  if (event.altKey) { 
    drawSection(event);  
  }
});


