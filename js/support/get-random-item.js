const getRandomItem = (array) => {
  const newArray = array.slice();
  return newArray[Math.floor(Math.random() * (newArray.length - 1))];
};

export default getRandomItem;
