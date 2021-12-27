import score from './score';

test('score should properly compute the score for a word.', () => {
    expect(score('test')).toEqual(1);
    expect(score('banana')).toEqual(6);
    expect(score('stewardesses')).toEqual(19);
});
