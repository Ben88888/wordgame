const wordsWithTAC = ['cat', 'act'];
const wordsWithBDA = ['bad'];
const wordsWithDAD = ['dad', 'add'];
const wordsWithMOM = ['mom'];
const wordsWithGOD = ['god', 'dog'];
const wordsWithATE = ['eat', 'ate', 'tea'];
const wordsWithXTA = ['tax'];
const wordsWithIFX = ['fix'];
const wordsWithPYS = ['spy']
const wordsWithRAT = ['art', 'rat', 'tar'];
const wordsWithOPT = ['pot', 'top'];
const wordsWithWEO = ['owe'];
const wordsWithRYC = ['cry'];
const wordsWithACP = ['cap'];
const wordsWithASE = ['sea'];

const wordsWithSLOT = ['slot', 'lots', 'lost'];
const wordsWithRICE = ['rice', 'eric'];
const wordsWithTRIO = ['trio', 'riot'];
const wordsWithROAR = ['roar'];
const wordsWithPOOL = ['pool', 'loop'];
const wordsWithSOIL = ['soil'];
const wordsWithLAZY = ['lazy'];
const wordsWithSWOP = ['swop'];
const wordsWithMASS = ['mass'];
const wordsWithPLOT = ['plot'];
const wordsWithMEAN = ['mean', 'name', 'amen'];
const wordsWithGOWN = ['gown'];
const wordsWithCOAT = ['coat', 'taco'];
const wordsWithWAKE = ['wake', 'weak'];
const wordsWithFIRE = ['fire'];
const wordsWithFILE = ['file', 'life'];

const wordsWithRALLY = ['rally'];
const wordsWithSMOKE = ['smoke'];
const wordsWithGLOVE = ['glove'];
const wordsWithLEASH = ['leash', 'heals'];
const wordsWithMOUTH = ['mouth'];
const wordsWithPITCH = ['pitch'];
const wordsWithFAVOR = ['favor'];
const wordsWithCARRY = ['carry'];
const wordsWithTEMPT = ['tempt'];
const wordsWithBREAK = ['break', 'baker', 'brake'];
const wordsWithSTORE = ['store'];
const wordsWithFAULT = ['fault'];
const wordsWithSTICK = ['stick', 'ticks'];
const wordsWithLOBBY = ['lobby'];
const wordsWithTIRED = ['tired', 'tried'];

const wordsWithPUNISH = ['punish', 'unship'];
const wordsWithTENANT = ['tenant'];
const wordsWithCOLONY = ['colony'];
const wordsWithREPORT = ['report', 'pretor'];
const wordsWithPACKET = ['packet'];
const wordsWithMARBLE = ['marble', 'ramble'];
const wordsWithBOTTOM = ['bottom'];
const wordsWithWEIGHT = ['weight'];
const wordsWithVIABLE = ['viable'];
const wordsWithUPDATE = ['update'];
const wordsWithJOCKEY = ['jockey'];
const wordsWithMUSCLE = ['muscle'];
const wordsWithVELVET = ['velvet'];
const wordsWithAVENUE = ['avenue'];
const wordsWithAPPEAL = ['appeal'];

const gameStart = () => {
    let DoYouWantToContinue = prompt('Do You Want To Continue?');
    let score = 0;
    while(DoYouWantToContinue == 'Yes' || DoYouWantToContinue == 'yes' || DoYouWantToContinue == 'y') {
        const numLetters = prompt("Welcome to the word game! Please enter how many letters you would like to guess a word with");
        const randomWordsLengthN = wordsWithNLettersChooser(numLetters);
        const randomIndex = Math.floor(Math.random() * randomWordsLengthN.length);
        const randomWord = randomWordsLengthN[randomIndex][0];
        alert(letterRandomizer(randomWord));
        score = guessWords(randomWordsLengthN[randomIndex], score);
        DoYouWantToContinue = prompt('Do You Want To Continue?');
    }
}

/**
 * This function chooses a list of words which are n in size.
 * @param {number} n the size of the words in the list of words 
 */
const wordsWithNLettersChooser = (n) => {
    const listOfWords = [[wordsWithTAC, wordsWithBDA, wordsWithDAD, wordsWithMOM, wordsWithGOD, wordsWithATE,
        wordsWithXTA, wordsWithIFX, wordsWithPYS, wordsWithRAT, wordsWithOPT, wordsWithWEO, wordsWithRYC,
        wordsWithACP, wordsWithASE],
        [wordsWithSLOT, wordsWithRICE, wordsWithTRIO, wordsWithCOAT, wordsWithFILE, wordsWithFIRE,
        wordsWithGOWN, wordsWithLAZY, wordsWithMASS, wordsWithMEAN, wordsWithPLOT, wordsWithPOOL,
        wordsWithRICE, wordsWithROAR, wordsWithSLOT, wordsWithSOIL, wordsWithSWOP, wordsWithWAKE],
        [wordsWithRALLY, wordsWithSMOKE, wordsWithGLOVE, wordsWithLEASH, wordsWithMOUTH, wordsWithPITCH,
        wordsWithFAVOR, wordsWithCARRY, wordsWithTEMPT, wordsWithBREAK, wordsWithSTORE, wordsWithFAULT,
        wordsWithSTICK, wordsWithLOBBY, wordsWithTIRED],
        [wordsWithPUNISH, wordsWithTENANT, wordsWithCOLONY, wordsWithREPORT, wordsWithPACKET,
        wordsWithMARBLE, wordsWithBOTTOM, wordsWithWEIGHT, wordsWithVIABLE, wordsWithUPDATE,
        wordsWithJOCKEY, wordsWithMUSCLE, wordsWithVELVET, wordsWithAVENUE, wordsWithAPPEAL]];
    return listOfWords[n - 3];
}
/**
 * This function receives a word and changes the order of its letters.
 * @param {string} word the given word.
 */
const letterRandomizer = (word) => {
    const listOfIndexes = [];

    // this for makes i a part of listOfIndexses. for example:
    // for the word "memes" list of indexes would be: [0, 1, 2, 3, 4]
    for (let i = 0; i < word.length; i++) {
        listOfIndexes.push(i);
    }

    // this part randomizes the sort of the numbers in the array.
    const mixedIndexes = listOfIndexes.sort(function() {
        return .5 - Math.random();
    });
    
    // this part makes the numbers in the array to get replaced with the wanted letters into mixedWord.
    let mixedWord = "";
    for (let j = 0; j < listOfIndexes.length; j++) {
        mixedWord = mixedWord + word.charAt(listOfIndexes[j]);
    }
    return mixedWord;
}

/**
 * this function lets the user to guess words and counts the score.
 * @param {Array<string>} randomWordsLengthN the random word list with length n
 * @param {Number} score the user's score
 */
const guessWords = (randomWordsLengthN, score) => {
    let rightWordCounter = 0;
    const numberOfWords = randomWordsLengthN.length;
    do {
        const guessedWord = prompt("Please place your guess!");
        if (randomWordsLengthN.indexOf(guessedWord) != -1) {
            score++;
            rightWordCounter++;
            alert("Success! your score is " + score + " and you guessed right " + rightWordCounter +
                " words out of " + numberOfWords);
        }
        else {
            score--;
            alert("Ouch! your score is " + score + " and you guessed right " + rightWordCounter + " words out of "
                + numberOfWords);
        }
    } while (numberOfWords > rightWordCounter);
    return score;
}

gameStart();