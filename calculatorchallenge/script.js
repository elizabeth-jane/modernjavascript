function calculator(num1, num2, operator) {
 switch(operator){
        case '+':
        console.log(num1 + num2);
    break;
        case '-':
        console.log(num1 - num2);
    break;
     case '/':
        console.log(num1 / num2);
    break;
        case '*':
        console.log(num1 * num2);
    break;
     case '%':
        console.log(num1 % num2);
   break;
    default:
        console.log('input valid operator');
    }   
}

calculator(3,  5 , '*' ); 
