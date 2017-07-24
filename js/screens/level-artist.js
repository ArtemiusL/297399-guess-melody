import LevelArtistView from '../view/level-artist-view';

export default ({data, answerCallback}) => {
  const levelArtist = new LevelArtistView(data);

  const checkAnswer = function (element) {
    const answerID = element.id;
    const currentID = data.trueSong.id;

    if (answerID === currentID) {
      return true;
    } else {
      return false;
    }
  };

  levelArtist.onAnswerClick = (evt) => {
    const answer = checkAnswer(event.target);
    answerCallback(answer);
  };

  return levelArtist.element;
};