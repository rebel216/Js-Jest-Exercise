function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw 'Not a valid string';
  }
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += 1;
  }
  return count;
}

const reverseString = (inputText) => {
  inputText = inputText.split('').reverse().join('');
  return inputText;
};

module.exports = { stringLength, reverseString}
