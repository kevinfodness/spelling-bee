// @ts-ignore
const englishWords = require('wordlist-english').english;
const validateSeed = require('../services/validate-seed').default;

// Process all seeds from 0 to 8,031,810,175.
let validSeeds: number = 0;
const maxSeed: number = 26 ** 7 - 1;
const step: number = Math.floor(maxSeed / 100);
for (let seed: number = 0; seed <= maxSeed; seed += 1) {
    if (validateSeed(seed)) {
        validSeeds += 1;
    }
    if (seed % step === 0) {
        console.log(`${seed / step}% -- found ${validSeeds}`);
    }
}

console.log(validSeeds);
