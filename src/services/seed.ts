/**
 * Given an array of letters, converts them into a numeric seed.
 * @param letters An array of letters to convert to a seed.
 * @returns The seed.
 */
const seed = (letters: string[]): number => letters
    .reduce((acc, item, index) =>
        (item.charCodeAt(0) - 65) * 26 ** (letters.length - index - 1) + acc, 0);

export default seed;
