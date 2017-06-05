export default (fragment) => {
  const element = document.createElement(`section`);
  element.innerHTML = fragment;
  return element.firstChild;
};
