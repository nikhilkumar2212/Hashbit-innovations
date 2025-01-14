//  Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH 
// */

function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputStr = 'Hello';
reversedStr = reverseString(inputStr);

console.log("Reversed string: ", reversedStr);
console.log("");
