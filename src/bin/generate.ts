// @ts-ignore
const englishWords = require('wordlist-english').english;
const fastForward = require('../services/fast-forward').default;
const validateSeed = require('../services/validate-seed').default;

// Process all seeds from 0 to 8,031,810,175.
let validSeeds: number = 0;
const maxSeed: number = 26 ** 7 - 1;
const step: number = Math.floor(maxSeed / 100);
for (let seed: number = 0; seed <= maxSeed; seed += 1) {
    // Fast-forward the seed to the next possibility.
    seed = fastForward(seed);

    // Capture valid seeds.
    if (validateSeed(seed)) {
        validSeeds += 1;
    }
}

// Print final message.
console.log(`Found ${validSeeds}`);
