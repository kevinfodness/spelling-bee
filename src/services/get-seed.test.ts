import getSeed from './get-seed';

test('getSeed should return an integer.', () => {
    expect(Number.isInteger(getSeed())).toEqual(true);
});
