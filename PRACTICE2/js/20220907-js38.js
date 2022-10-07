//삼항 연산자(ternary-operator)
//if() 조건문을 사용하다보면 영역(scope)이 깊어져 가독성이 매우 떨어지는 현상이 발생
//이럴때 삼항 연산자 사용을 추천
//축약되어있기에 가독성은 떨어지지만 깔끔한 코드를 만들 수 있음 

let operandOne = 'test';
let operandTwo = 4;
let result = (operandOne.length === operandTwo) ? 'hello' : 'bye';

console.log(result); //hello

console.log(operandOne.length); //4
console.log(operandTwo); //4
//참이라서 'hello'출력
