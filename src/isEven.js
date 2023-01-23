const isEven = (num) => {
  let result;
  if (num % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  }
  return result;
};

export default isEven;
