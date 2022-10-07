//생성자 함수에도 부모자식 관계가 존재한다.

//부모 Class id, name, city라는 속성을 만들 준비가 되어있다. 
class ParentObj {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

let ParentObjInstance = new ParentObj('1', '이상해씨', '대전');
console.log(ParentObjInstance);

//부모클래스의 기능을 그대로 전수받은 자식 Class, type이라는 속성을 추가하여 부모클래스와 다른 인스턴스를 생성할 수 있다. 
class ChildObj extends ParentObj {
  constructor(type){ //부모때문에 type 매개변수는 index 3번째가 된다
    super(); //부모의 constructor() 데이터를 가져오는 특수한 함수
    this.type = type;
  }
}

let childObjInstance = new ChildObj('풀');
console.log(childObjInstance);
