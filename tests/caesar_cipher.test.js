import cipher from '../scripts/caesar_cipher';

test('Encode the string using offset of 3', () => {
    expect(cipher.encode('Hello my friend, are you going to Zoo?', 3)).toBe('Khoor pb iulhqg, duh brx jrlqj wr Crr?');
});

test('Decode the encoded string using the same offset', () => {
    expect(cipher.decode('Khoor pb iulhqg, duh brx jrlqj wr Crr?', 3)).toBe('Hello my friend, are you going to Zoo?');
});