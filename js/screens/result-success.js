import ResultSuccessView from '../view/result-success-view';

export default ({totalScore, percentage, onClickReplay}) => {
  const resultSuccess = new ResultSuccessView(totalScore, percentage);

  resultSuccess.onClickReplay = () => onClickReplay();

  return resultSuccess.element;
};