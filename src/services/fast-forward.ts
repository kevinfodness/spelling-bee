import seed from './seed';
import unseed from './unseed';

/**
 * Given a seed, fast-forwards it to the next potentially valid seed given the
 * rule that no arrangement of letters can be out of order. For example:
 *  ['A', 'B', 'C']
 * would be valid but
 *  ['A', 'C', 'B']
 * would not, and in the second case, the result of the fast-forward would be:
 *  ['A', 'C', 'D']
 * @param initialSeed The seed to fast-forward.
 * @returns The fast-forwarded seed.
 */
const fastForward = (initialSeed: number): number => {
    let newSeed: number;
    const maxSeed: number = 26 ** 7 - 1;
    for (newSeed = initialSeed; newSeed < maxSeed; newSeed += 1) {
        let letters: string[] = unseed(newSeed);

        // Ensure letters are in order.
        for (let i: number = 0; i < letters.length - 1; i += 1) {
            const char1 = letters[i].charCodeAt(0);
            const char2 = letters[i + 1].charCodeAt(0);
            if (char1 >= char2) {
                // Special handling if the current character is a Z.
                if (char1 === 91) {
                    // Special handling if the first position is a Z.
                    if (i === 0) {
                        // Set letters to the last position.
                        letters = ['Z', 'Z', 'Z', 'Z', 'Z', 'Z', 'Z'];
                    } else {
                        // Increment the previous letter and set all following letters to As, then reset the loop.
                        letters[i - 1] = String.fromCharCode(letters[i - 1].charCodeAt(0) + 1);
                        for (let j = i; j < letters.length; j += 1) {
                            letters[j] = 'A';
                        }
                        i = 0;
                    }
                } else {
                    letters[i + 1] = String.fromCharCode(char1 + 1);
                }
            }
        }
        newSeed = seed(letters);

        // Ensure there is at least one vowel.
        if (letters.includes('E')
            || letters.includes('A')
            || letters.includes('I')
            || letters.includes('O')
            || letters.includes('U')
        ) {
            break;
        }
    }

    return newSeed;
};

export default fastForward;
