import unseed from './unseed';

test('unseed should properly convert a seed number to an array of letters.', () => {
    expect(unseed(0)).toEqual(['A', 'A', 'A', 'A', 'A', 'A', 'A']);
    expect(unseed(1)).toEqual(['A', 'A', 'A', 'A', 'A', 'A', 'B']);
    expect(unseed(1234567890)).toEqual(['D', 'Z', 'X', 'P', 'R', 'W', 'K']);
    expect(unseed(8031810174)).toEqual(['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Y']);
    expect(unseed(8031810175)).toEqual(['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z']);
});
