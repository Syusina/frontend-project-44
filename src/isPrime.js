const isPrime = (number) => {
  const num = number;
  const checkPrime = () => {
    if (num < 2) {
      return false;
    }
    let divider = 2;
    while (divider <= num / 2) {
      if (num % divider === 0) {
        return false;
      }
      divider += 1;
    }
    return true;
  };
  const correctAnswer = checkPrime(num) ? 'yes' : 'no';
  return correctAnswer;
};

export default isPrime;
