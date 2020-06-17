const analyze = (array) => {
  const obj = {};
  let sum = 0;
  let max = array[0];
  let min = array[0];
  array.forEach(num => {
    sum += num;
    if (max < num) {
      max = num;
    } else if (min > num) {
      min = num;
    }
  });
  obj.average = sum / array.length;
  obj.min = min;
  obj.max = max;
  obj.length = array.length;
  return obj;
};
export default analyze;