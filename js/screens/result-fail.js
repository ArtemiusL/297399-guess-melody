import ResultFailView from '../view/result-fail-view';

export default ({onClickReplay}) => {
  const resultFail = new ResultFailView();

  resultFail.onClickReplay = () => onClickReplay();

  return resultFail.element;
};