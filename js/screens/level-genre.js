import LevelGenreView from '../view/level-genre-view';

export default ({data, answerCallback}) => {
  const levelGenre = new LevelGenreView(data);

  const checkAnswers = (answers) => {
    const correctAnswers = [];
    const trueGenre = data.trueSong.genre;

    answers.forEach((answer) => {
      if (answer === trueGenre) {
        correctAnswers.push(true);
      } else {
        correctAnswers.push(false);
      }
    });

    return (correctAnswers.indexOf(false) !== -1) ? false : true;
  };

  levelGenre.onAnswerClick = () => {
    const answer = checkAnswers(levelGenre.answers);
    answerCallback(answer);
  };

  return levelGenre.element;

};