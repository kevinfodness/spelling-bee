import { uniq } from 'lodash';

/**
 * Given a matching word, computes the score for the match according to the
 * following formula:
 *  - 4-letter words are worth 1 point.
 *  - Words with more than 4 letters are worth 1 point per letter.
 *  - Pangrams (defined as words that use 7 unique letters) get a +7 bonus.
 * @param word The word to score.
 * @returns The score for the word.
 */
const score = (word: string): number => {
    // Handle 4-letter words separately.
    if (word.length === 4) {
        return 1;
    }

    return uniq(word.split('')).length === 7
        ? word.length + 7
        : word.length;
};

export default score;
