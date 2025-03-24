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