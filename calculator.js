// console.log(`Their name is ${process.argv[2]} ${process.argv[3]} and their favorite movie is ${process.argv[4]}.)



let num1 = process.argv[2]
let operator = process.argv[3]
let num2 = process.argv[4]

switch (operator) {
    case 'add':
    case ('+'):
        console.log(parseInt(num1) + parseInt(num2))
        break;
    case 'subtract':
    case '-':
        console.log(parseInt(num1) - parseInt(num2))
        break;
    case 'multiply':
    case '*':
        console.log(parseInt(num1) * parseInt(num2))
        break;
    case 'divide':
    case '/':
        console.log(parseInt(num1) / parseInt(num2))
        break;
}