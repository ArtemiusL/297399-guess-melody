import WelcomeView from '../view/welcome-view';

export default ({onPlayClick}) => {
  const welcome = new WelcomeView();

  welcome.onPlayClick = () => onPlayClick();

  return welcome.element;
};