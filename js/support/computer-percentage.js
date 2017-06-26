const computePercentage = ({time, score, statistics}) => {
  const myStats = {time, score};
  const numOfLusers = statistics.reduce((qurrentnumOfLusers, currentResult) => {
    if (myStats.score > currentResult.score || myStats.score === currentResult.score && myStats.time < currentResult.time) {
      return qurrentnumOfLusers + 1;
    } else {
      return qurrentnumOfLusers;
    }
  }, 0);
  return Math.trunc(100 * numOfLusers / statistics.length);
};


export default computePercentage;
