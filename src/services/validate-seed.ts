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

    // TODO: Compare against dictionary to ensure there is a pangram and total points > 100.

    return true;
};

export default validateSeed;
