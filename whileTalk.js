// While Talk

/* Take a phrase like ‘turpentine and turtles’ 
and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’. 

There are a few simple rules for translating text to whale language:
    1. There are no consonants. Only vowels excluding “y”.
    2. The u‘s and e‘s are extra long, so we must double them in our program.*/

const input = 'i love my husband'; //Text to convert to while talk
const vowels = ['a', 'e', 'i', 'o', 'u'];
    
let resultArray = []; // Place to store the vowels from the input string.

for (let i = 0; i < input.length; i++) {
    if(input[i] === 'e') {
      resultArray.push(input[i]) }
/* Checks if each letter in the input string is equal to 'e'. 
If so, adding input[i] to the resultArray. */ 

    else if (input[i] === 'u') {
      resultArray.push(input[i]) };
/* Checks if each letter in the input string is equal to 'u'. 
If so, adding input[i] to the resultArray. */ 

    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] === input[i]) {
// Code block that compares the input letter to every letter in the vowels array.

        resultArray.push(vowels[j]);
      }
    }
  }

  