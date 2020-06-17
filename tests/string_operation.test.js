import stringOp from '../scripts/string_operation';

test('capitalize the word food', () => {
  expect(stringOp.capitalize('food')).toBe('Food');
});

test('reverse the word program', () => {
  expect(stringOp.reverseString('program')).toBe('margorp');
});