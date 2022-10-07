class User {

  constructor(name) {
    //객체의 기본 상태를 설정해주는 생성자 메서드 constructor()
    //new에 의해 자동으로 호출 -> 특별한 절차 없이 객체 초기화
    this.name = name;
  }
  objOne(){
    console.log(this.name);
  }
}

let user = new User('me');
user.objOne();

class Test{
  constructor(name){
    this.name = name;
  }
  methoOne(){
    console.log(this.name);
  }
  methoTwo(){
    console.log('hello');
  }
}

let test = new Test('hi');
test.methoOne;

