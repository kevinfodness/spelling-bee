/**
 * Returns a random number between 0 and 26^7 - 1.
 * @returns A random number between 0 and 26^7 - 1.
 */
const getSeed = (): number => Math.floor(Math.random() * 26 ** 7);

export default getSeed;
