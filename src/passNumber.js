const getPassNumber = (arr, passIndex) => {
  let num = arr[passIndex];
  const passNumber = num;
  num = '..';
  const numberForQuestion = arr.join(' ');
  const correctAnswer = passNumber.toString();
  return [numberForQuestion, correctAnswer];
};

export default getPassNumber;
