// javascript-50 | 직접만드는 콜백함수

function oneFunc(param) {
  if(typeof(param) === "string"){
    return param + "hello";
  }
}

function twoFunc(param) {
  if(typeof(param) === "string"){
    return param + "bye";
  }
}
//안티패턴 함수지만 위 두 개의 함수는 구조가 완전히 동일하고, return의 + 결합자 문자열만 다르다. 
//가시적으로 보이게 만들어진 것이므로 결코 좋은 작성방식이 아님을 주의할 것. 

function handMade(test, callback) {
  if(typeof(test) === "string" && typeof callback === "function") {
    //handMade 함수는 두 개의 매개변수(parameter)를 인자(argument)로 받는데, 0번째 매개변수는 "문자열"이어야만 하고, 1번째 매개변수는 "함수" 여야만 "참" 판정을 낸다.
    console.log(typeof test); //string
    console.log(typeof callback); //function
    //위의 callback 매개변수 타입체크 방법을 살펴보면, 함수호출 방식인 소괄호를 별도로 붙여주지 않았다. JS에서 소괄호가 없으면 호출(call)을 하지 않았다는 표시 
    console.log(callback(test));
    //인자 test는 부모함수인 hanMade에서 받아온 인자이다. 
  } 
}
handMade("함수호출을 안했네 ", oneFunc);
handMade("호출을 잊지말자 ", twoFunc);
// 같은 함수를 두 번 호출했는데, 매개변수로 사용된 함수는 다르다.
// 위의 함수는 콜백으로 만드는 의미가 전혀 없긴 하지만, 명확하게 함수를 다시 부르는 형태를 통해 실행되었다.
// oneFunc(), twoFunc()는 독립적이지 않고, 자식처럼 handMade라는 함수의 '매개변수' 형태로 활용 -> 즉, 콜백 함수의 형태이다. 