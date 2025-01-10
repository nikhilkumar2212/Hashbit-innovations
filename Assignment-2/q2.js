//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

let a = parseInt(prompt("enter first number"));
let operator = prompt("enter operation");
let b= parseInt(prompt("enter second number"));

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