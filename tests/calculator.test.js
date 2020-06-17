import calc from '../scripts/calculator';

test('Sum of 7 and 5', () => {
  expect(calc.add(7, 5)).toBe(12);
});

test('Subtract of 7 and 5', () => {
  expect(calc.subtract(7, 5)).toBe(2);
});

test('multiply of 7 and 5', () => {
  expect(calc.multiply(7, 5)).toBe(35);
});

test('divide of 7 and 5', () => {
  expect(calc.divide(7, 5)).toBe(1.4);
});