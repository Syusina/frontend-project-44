const getProgression = (startNumber, step, length) => {
  const allNumbers = [];
  let num = startNumber;
  for (let i = 0; i <= length; i += 1) {
    allNumbers.push(num);
    num += step;
  }
  return allNumbers;
};

export default getProgression;
