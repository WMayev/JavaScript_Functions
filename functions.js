/* Looping a Triangle

Write a loop that makes seven calls to console.log [...]*/

for (let i = '#'; i.length <= 7; i += '#') {
    console.log(i);
}


//FizzBuzz

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
