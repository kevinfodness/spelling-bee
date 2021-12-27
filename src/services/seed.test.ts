import seed from './seed';

test('seed should convert an array of letters into a seed.', () => {
    expect(seed(['A', 'A', 'A', 'A', 'A', 'A', 'A'])).toEqual(0);
    expect(seed(['A', 'A', 'A', 'A', 'A', 'A', 'B'])).toEqual(1);
    expect(seed(['D', 'Z', 'X', 'P', 'R', 'W', 'K'])).toEqual(1234567890);
    expect(seed(['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Y'])).toEqual(8031810174);
    expect(seed(['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z'])).toEqual(8031810175);
});
