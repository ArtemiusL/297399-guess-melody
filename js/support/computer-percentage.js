const computePercentage = ({time, score, statistics}) => {
  const myStats = {time, score};
  let newStats = [];
  newStats = statistics.slice();
  newStats.push(myStats);
  newStats.sort(function (a, b) {
    return b.score - a.score || a.time - b.time;
  });

  if (newStats.indexOf(myStats) === 0 && newStats.length === 1) {
    return 100;
  }
  return Math.trunc(((newStats.length - (newStats.indexOf(myStats) + 1)) / newStats.length) * 100);
};

export default computePercentage;
