const generateRandomNumber = (minNum, maxNum) => {
  const min = Math.ceil(minNum);
  const max = Math.floor(maxNum);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default generateRandomNumber;
