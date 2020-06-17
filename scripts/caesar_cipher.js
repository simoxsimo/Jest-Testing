const caesarCipher = (() => {
  const unicodeArray = [];
  const encodeCharsArray = [];
  const formCharsArray = (string) => string.split('');

  const charUnicode = (char) => {
    unicodeArray.push(char.charCodeAt());
  };

  const upperCaseCondition = (char) => char.charCodeAt() > 64 && char.charCodeAt() < 91;

  const lowerCaseCondition = (char) => char.charCodeAt() > 96 && char.charCodeAt() < 123;

  const checkChars = (char) => upperCaseCondition(char) || lowerCaseCondition(char);

  const UnicodeTransform = (char, charIndex, offset) => {
    if (checkChars(char)) {
      if (offset > 0) {
        // eslint-disable-next-line max-len
        if ((unicodeArray[charIndex] + offset > 90 && unicodeArray[charIndex] < 97) || unicodeArray[charIndex] + offset > 122) {
          unicodeArray[charIndex] += (offset - 26);
        } else {
          unicodeArray[charIndex] += offset;
        }
      } else if (offset < 0) {
        // eslint-disable-next-line max-len
        if (unicodeArray[charIndex] + offset < 65 || (unicodeArray[charIndex] + offset < 97 && unicodeArray[charIndex] > 90)) {
          unicodeArray[charIndex] += (offset + 26);
        } else {
          unicodeArray[charIndex] += offset;
        }
      }
    }
    return unicodeArray[charIndex];
  };

  const UnicodetoChar = (char, charIndex, offset) => {
    encodeCharsArray.push(String.fromCharCode(UnicodeTransform(char, charIndex, offset)));
  };

  const charsArrayToString = () => encodeCharsArray.join('');

  const encode = (string, offset) => {
    formCharsArray(string).forEach((char, index) => {
      charUnicode(char);
      UnicodetoChar(char, index, offset);
    });
    return charsArrayToString();
  };

  const decode = (string, offset) => {
    unicodeArray.splice(0, unicodeArray.length);
    encodeCharsArray.splice(0, encodeCharsArray.length);
    return encode(string, -(offset));
  };

  return {
    encode,
    decode,
  };
})();

export default caesarCipher;
