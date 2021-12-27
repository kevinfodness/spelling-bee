// @ts-ignore
const fs = require('fs');
const _ = require('lodash');
const englishWords = require('wordlist-english').english;
const fastForward = require('../services/fast-forward').default;
const score = require('../services/score').default;
const makeSeed = require('../services/seed').default;
const unseed = require('../services/unseed').default;

// Normalize all words to uppercase to ease comparison.
console.log('Normalizing words...');
const normalizedWords: string[] = englishWords.map((word: string) => word.toUpperCase());
console.log(`Created database of ${normalizedWords.length} normalized words.`);

// Create a list of valid words that are at least 4 letters long and contain no more than 7 unique letters.
console.log('Creating list of valid words...');
const validWords: string[] = normalizedWords.filter((word: string) => word.length >= 4 && _.uniq(word.split('')).length <= 7);
console.log(`Created database of ${validWords.length} valid words.`);

// Filter down the list of words to those that are comprised of exactly seven unique letters.
console.log('Creating list of comparison strings for pangrams...');
const sevenLetterUniques: string[] = _.sortedUniq(
    validWords
        .map((word: string) => _.sortedUniq(word.split('').sort()).join(''))
        .filter((uniqueLetters: string) => uniqueLetters.length === 7)
        .sort()
);
console.log(`Created database of ${sevenLetterUniques.length} unique pangram patterns.`);

// Process all seeds from 0 to 8,031,810,175.
console.log('Processing seeds...');
const validSeeds: number[] = [];
const maxSeed: number = 26 ** 7 - 1;
for (let seed: number = 0; seed <= maxSeed; seed += 1) {
    // Fast-forward the seed to the next possibility.
    seed = fastForward(seed);
    const letters: string[] = unseed(seed);

    // Ensure the seed has a valid pangram.
    if (-1 === _.sortedIndexOf(sevenLetterUniques, letters.join(''))) {
        continue;
    }

    // Get a list of potential matching words by removing words that contain letters other than the target seven.
    const potentialMatches: string[] = validWords
        .filter((word: string) => _.without(word.split(''), ...letters).length === 0);

    // Alternating each letter as the primary, compute scores and capture seeds with >= 100 points.
    for (let i: number = 0; i < letters.length; i += 1) {
        const cardinalLetter: string = letters[i];

        // Further refine the word list to exclude those that don't have the cardinal letter.
        const matchingWords: string[] = potentialMatches
            .filter((word: string) => !word.split('').includes(cardinalLetter));

        // If the total score is at least 100, include this seed.
        let total: number = 0;
        for (let j: number = 0; j < matchingWords.length; j += 1) {
            total += score(matchingWords[j]);
            if (total >= 100) {
                const newLetters: string[] = _.without(letters, cardinalLetter);
                newLetters.unshift(cardinalLetter);
                validSeeds.push(makeSeed(newLetters));
                break;
            }
        }
    }
}

// Write out findings to file.
fs.writeFileSync(__dirname + '/../../data/seeds.json', JSON.stringify(validSeeds));

// Print final message.
console.log(`Found ${validSeeds.length} seeds.`);
