/**
 * Given a seed number, converts it to an array of letters by converting the
 * seed number from base-10 to base-26.
 * @param seed The seed number to convert to an array of letters.
 */
const unseed = (seed: number): string[] => {
    const letters: string[] = [];
    let seedReducer: number = seed;
    for (let i: number = 0; i < 7; i += 1) {
        letters.push(String.fromCharCode(seedReducer % 26 + 65));
        seedReducer = Math.floor(seedReducer / 26);
    }
    return letters.reverse();
};

export default unseed;
