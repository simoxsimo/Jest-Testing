import analyze from '../scripts/analysis';

const obj = analyze([1, 2, 3, 4, 5, 6]);

test('average of array', () => {
  expect(obj.average).toBe(3.5);
});

test('max number in the array', () => {
  expect(obj.max).toBe(6);
});

test('min number in the array', () => {
  expect(obj.min).toBe(1);
});

test('size of the array', () => {
  expect(obj.length).toBe(6);
});