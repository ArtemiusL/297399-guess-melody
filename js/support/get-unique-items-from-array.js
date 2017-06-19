const getUniqueItemsFromArray = function (size, array) {
  const arrayTemp = [...array];
  const newArray = [];
  while (newArray.length < size) {
    const randomItem = arrayTemp.splice(Math.floor(Math.random() * (arrayTemp.length - 1)), 1)[0];
    newArray.push(randomItem);
  }
  return newArray;
};

export default getUniqueItemsFromArray;