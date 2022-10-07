//? 화살표 함수가 만들어진 이유 
// 축약형 표현 + 개발자들의 요구사항을 모두 수용한 작성법 : this의 처리방식이 일반 함수와 다름

const scopeDebugging = { //객체 스코프 시작부분
  whatThis: function() {
    console.log(this); 
  }, //일반 함수 작성방식
  arrowThis: () => {
    console.log(this);
  } //화살표 함수 방식으로 arrowThis라는 메서드를 만들었다. 
} //옆 중괄호가 객체의 스코프 끝부분 

//결과 : { whatThis: [Function: whatThis], arrowThis: [Function: arrowThis] }
console.log(scopeDebugging.whatThis()); //undefined
console.log(scopeDebugging.arrowThis()); //{} undefined

//작성 방식만 다를 뿐 원하는 것은 this 키워드가 가리키고 있는 것이 무엇인지 판단해보면, 둘 다 같은 값이 나와야 출력되는(가리키는) 값은 다르게 나온다. 
// 화살표 함수의 매우 큰 특징 중 하나이다. 