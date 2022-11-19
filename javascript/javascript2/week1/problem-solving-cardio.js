//Problem Solving Cardio

// 1.1. Find the shortest word
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
const shortestWord = shortestDanishWord(danishWords)


function shortestDanishWord(danishWords) {
    const wordLength = [];

    // Loop through the array to get the length of each word
    for (let i = 0; i < danishWords.length; i++) {
        wordLength.push((danishWords[i].length))
    }
    //console.log (wordLength)

    const shortestWordLength = (Math.min(...wordLength));
    //... why is it used
    console.log(shortestWordLength); //1

    for (let i = 0; i < danishWords.length; i++) {
        if ((danishWords[i].length) === shortestWordLength) {
            return (danishWords[i])
        }
    }
};
console.log(shortestWord);

// 1.2. Find and count the Danish letters
//Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";
const numberOfLetters = countDanishLetters(danishString)

const danishString2 = "Blå grød med røde bær";
const numberOfLetters2 = countDanishLetters(danishString2)

function countDanishLetters(string) {
    let countÅ
    let countÆ
    let countØ

    if (string.includes("æ")) {
        countÆ = string.match(/æ/gi || []).length;
    } else {
        countÆ = 0
    }

    if (string.includes("ø")) {
        countØ = string.match(/ø/gi || []).length;
    } else {
        countØ = 0
    }

    if (string.includes("å")) {
        countÅ = string.match(/å/gi || []).length;
    } else {
        countÅ = 0
    }

    return (`total: ${countÆ + countØ + countÅ} , æ: ${countÆ}, ø: ${countØ}, å: ${countÅ}`)

}

console.log(numberOfLetters);
// returns {total: 1 , æ: 0, ø: 0, å: 1}

console.log(numberOfLetters2);
// returns {total: 4, æ: 1, ø: 2, å: 1}




