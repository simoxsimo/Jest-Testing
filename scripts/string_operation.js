const stringOperation = (() => {
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const reverseString = (string) => {
    const array = string.split('');
    const reverse = [];
    for (let index = array.length - 1; index >= 0; index -= 1) {
      reverse.push(array[index]);
    }
    return reverse.join('');
  };

  return {
    capitalize,
    reverseString,
  };
})();

export default stringOperation;