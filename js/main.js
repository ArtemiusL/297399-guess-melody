/**
*Шаблон экранов
*/
const template = document.querySelector(`#templates`);

/**
*Список экранов
*/
const templates = Array.prototype.filter.call(template.content.querySelectorAll(`.main`), function (child) {
  return child;
});

/*
*Список экранов в нужном порядке
*/
const sectionList = [templates[4], templates[0], templates[3], templates[2]];

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

let altPress = false;

/**
*Ловим событbt нажатия alt+(</>)
*/
document.addEventListener(`keydown`, function (event) {
  if (event.altKey) {
    event.preventDefault();
    altPress = true;
  }
});

document.addEventListener(`keyup`, function (event) {
  if (event.altKey) {
    event.preventDefault();
    altPress = false;
  }
});

document.addEventListener(`keydown`, function (event) {
  if (altPress) {
    drawSection(event);
  }
});


