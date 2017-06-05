/**
*Контейнер отрисовки
*/

const container = document.querySelector(`.app`);

export default (element) => {
  container.replaceChild(element, container.firstChild);
};
