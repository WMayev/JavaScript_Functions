// Looping a Triangle

/* Write a loop that makes seven calls to console.log [...] */

for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
}


// FizzBuzz

for (let i = 1; i <= 100; i++) {
    if ((i % 3) === 0 && (i % 5) !== 0) {
        console.log('Fizz');
    } else if ((i % 5) === 0 && (i % 3) !== 0) {
        console.log('Buzz');
    } else if ((i % 3) === 0 && (i % 5) === 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}

// Chessboard

/* Program that uses console.log to print chess board made from "#" */

let size = 8;
let board = '';

for (let i = 0; i < size; i++) {
    for (let y = 0; y < size; y++) {
        board += (y % 2) === (i % 2) ? ' ' : '#';
    }
    board += '\n';
}

console.log(board);



// Capital Letters Index 

/* Function that takes random string as parameter and returns array of indexes,
where index number is a number of uppercase letters in the string. */

function capitalLetters(string) {
    let convertedSentence = string;
    let list = [];
    for (let i = 0; i < convertedSentence.length; i ++) {
        // for loop where number of loops is based on string length

        if (convertedSentence[i].match(/[A-Z]/) !== null) {
            /* Checks if the current character is an uppercase letter 
            using the regular expression /[A-Z]/.
            If so, its index is added to the "list" array. */
            list.push(i);
        }
    }

    return list; 
    /* Returns an array with the indexes of uppercase letters.
    Spaces are included as indexes. */
    
}

    // Example 

    let str = "I'm the BEST Programmer in The WorlD"

    console.log(capitalLetters(str));

    // Output: [0, 8, 9, 10, 11, 13, 27, 31, 35]



    // ReverseArray
    // Function that takes an array as a prameter and returns it reversed. 

    function reversedArray(arr) {
        let reversed = []; 
        for (let i = arr.length - 1; i >= 0; i--) {
            /*It iterate backwards to the moment that it will reach what was declared. */
            
            reversed.push(arr[i]); 
        }

        return reversed; // returns reversed array
    }
    
        // Example

        let arr1 = [1, 2, 3, 4, 5, 6, 9];

        console.log(reversedArray(arr1));