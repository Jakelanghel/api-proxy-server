const generateRandomNumbers = (array, length) => {
  const randomNumbers = [];
  const maxIndex = array.length - 1;

  while (randomNumbers.length < length) {
    const randomNumber = Math.floor(Math.random() * (maxIndex + 1));

    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }

  return randomNumbers;
};

module.exports = generateRandomNumbers;
