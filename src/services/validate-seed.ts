import unseed from './unseed';

/**
 * Given a seed number, validates it against a set of rules to determine if it
 * matches the minimum criteria for a valid seed:
 *  - No duplicate letters
 *  - At least one vowel
 *  - At least one pangram
 *  - At least 100 possible points
 * @param seed The seed to validate.
 * @returns True if the seed is valid, false if not.
 */
const validateSeed = (seed: number): boolean => {
    const letters = unseed(seed);

    // Ensure no duplicates.
    let lettersCopy = [...letters];
    lettersCopy.sort();
    for (let i = 0; i < lettersCopy.length - 1; i += 1) {
        if (lettersCopy[i] === lettersCopy[i + 1]) {
            return false;
        }
    }
    // Ensure at least one vowel. Check in order of vowel frequency for speed.
    if (!letters.includes('E')
        && !letters.includes('A')
        && !letters.includes('I')
        && !letters.includes('O')
        && !letters.includes('U')
    ) {
        return false;
    }

    // TODO: Compare against dictionary to ensure there is a pangram and total points > 100.

    return true;
};

export default validateSeed;
