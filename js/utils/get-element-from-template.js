export default function getElementFromTemplate(template) {
  const element = document.createElement(`div`);
  const fragment = document.createDocumentFragment();
  element.innerHTML = template;
  fragment.appendChild(element.firstChild);
  return fragment;
}
