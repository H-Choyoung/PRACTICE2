//? javascript-51 | 메서드(method)도 동적으로 만든다?

// 개발 볼륨이 커질수록 '값의 묶음' 형태인 객체에 의존하게 된다. 데이터를 저장할 때 일련의 규격(프로시저 procedure)으로서, 유지보수 관리 패턴으로서, 관계를 정의하는 규칙으로서 객체는 고도로 활용되고 있다. 
// 이러한 방식을 객체지향 프로그래밍 패러다임이라고 부른다. 
// 이에 따라 생성자 함수의 이해도를 높여야 하며, 생성자 함수를 다양하게 확장하는 방식이 존재하는가 하면 본 예제처럼 '동적으로 메서드를 만들어 할당'하기도 한다. 

// 자바스크립트 내장객체(첫글자가 파스칼케이스인)인 String객체와 Array객체는 순서(index)가 동일하게 있다는 점 때문에 하나의 함수(메서드)를 공용으로 사용한다. 이때 등장하는 개념이 프로토타입(prototype 체이닝문법)이다. 

const first = {
  one : 1,
  two : 2,
  makeString: function() {
    return this.one + ' ' + this.two; 
  }
}
//객체 리터럴 first는 숫자 값이 담긴 두 개의 프로퍼티와 하나의 메서드(함수)를 가지고 있다. 
console.log(first.makeString()); //1 2 
console.log(typeof first.makeString()); //string

const second = {
  one : 3,
  two : 4,
  makeString: function() {
    return this.one + ' ' + this.two; 
  }
}
//객체 리터럴 second도 동일하게 같은 property를 가지고 있으나 숫자값이 다르다.
// '같은 구조'이지만 값이 다르기 때문에 구분되어야 하나, 작성된 makeString()은 first와 second가 완전히 '동일'하다. => 중복이 발생한 셈
console.log(second.makeString()); //3 4 
console.log(typeof second.makeString()); //string

class Third {
  constructor(one, two) {
    this.one = one;
    this.two = two;
  }
}
//생성자함수 third는 값이 다를뿐 프로퍼티 구조는 위 두 변수와 동일한 패턴이다. 하지만 메서드가 빠져있다.

let instanceThird = new Third(5,6);
Third.prototype.makeString = function() {
  return this.one + ' ' + this.two;
}
// 메서드를 객체 외부에서 선언해준 형태를 확인할 수 있다.
// 새로운 문법인 프로토타입이 체인(연결)되어있는 것을 주목할 것 
// 결과적으로 아래의 호출은 first와 second의 결과와 동일하지만
// 동적으로 처리되었기 때문에 '필요하지 않으면' 메서드를 사용하지 않아도 된다.
// *즉 중복코드를 줄이고 심지어 모듈로도 변형이 가능하다.
console.log(instanceThird.makeString()); //TypeError: Cannot set properties of undefined (setting 'makeString')
// 객체리터럴 한 두개가 아닌 인스턴스 수만개가 생성된다면, 데이터양과 복잡도가 사람이 관리하기 어렵게 커지기 때문에 개발 작업 볼륨이 커질수록 도입해야할 '메서드 동적 선언'이 된다. 
// 위 예제는 일회용이지만, 기명함수를 활용한다면 바로 호출해서 할당할 수 있어서 유용하다.
// 생성자 함수 class extends와 개념은 비슷하지만 방향이 약간 다르다.
// 동일하게 사용할 수도 있고, '프로토타입'이라는 단어 자체가 '동적'이라는 뉘앙스와 비슷하기 때문에 개발팀 내에서는 약속을 하여 구분짓고 사용하기도 한다. 
