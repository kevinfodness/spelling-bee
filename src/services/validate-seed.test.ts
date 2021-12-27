import validateSeed from './validate-seed';

test('validateSeed should invalidate seeds with duplicate letters.', () => {
    // ['A', 'A', 'B', 'C', 'D', 'E', 'F']
    expect(validateSeed(494265)).toBe(false);
});

test('validateSeed should invalidate seeds with no vowels.', () => {
    // ['B', 'C', 'D', 'F', 'G', 'H', 'J']
    expect(validateSeed(334141583)).toBe(false);
});
