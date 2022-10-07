//* 객체를 여러개 만들고 싶을 때 사용하는 생성자 함수(constructor function)
// 규격화된 생성자 '함수 작성법 필요성'이 대두되었다.
//* class문법 등장

function OldConstructor(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}
const oldInstance = new OldConstructor(1, '이상해씨', '풀');
console.log(oldInstance); //{ id: 1, name: '이상해씨', type: '풀' }

class NewConstructor {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
const newInstance = new NewConstructor(4, '파이리', '불');
console.log(newInstance); //{ id: 4, name: '파이리', type: '불' }