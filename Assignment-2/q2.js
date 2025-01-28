//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

let a = 2
let operator = '+'
let b= 3

function calculate (a,operator,b){
switch(operator){
    case '+': console.log(a+b)
    break;
    case '-': console.log(a-b);
    break;
    case '*': console.log(a*b);
    break;
    case '/': console.log(a/b);
    break;  
}
}
calculate(a,operator,b);