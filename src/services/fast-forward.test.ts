import fastForward from './fast-forward';
import seed from './seed';

test('fastForward should properly fast-forward out-of-order letters.', () => {
    expect(fastForward(seed(['A', 'A', 'A', 'A', 'A', 'A', 'A'])))
        .toEqual(seed(['A', 'B', 'C', 'D', 'E', 'F', 'G']));
    expect(fastForward(seed(['A', 'C', 'B', 'D', 'E', 'F', 'G'])))
        .toEqual(seed(['A', 'C', 'D', 'E', 'F', 'G', 'H']));
    expect(fastForward(seed(['A', 'C', 'Z', 'Z', 'Z', 'Z', 'Z'])))
        .toEqual(seed(['A', 'D', 'E', 'F', 'G', 'H', 'I']));
});

test('fastForward should properly fast-forward no-vowel letter combinations.', () => {
    expect(fastForward(seed(['B', 'C', 'D', 'F', 'G', 'H', 'J'])))
        .toEqual(seed(['B', 'C', 'D', 'F', 'G', 'H', 'O']));
});
