const a = ['피카츄', '팬텀', '이브이'];
const b = ['아구몬', '레오몬', '고스트몬'];

const c = [...a, ...b];

// console.log(c); //[ '피카츄', '팬텀', '이브이', '아구몬', '레오몬', '고스트몬' ]

class Monster {
  constructor(id, name, type){
    this.id = id;
    this.name = name;
    this.type = type;
  };
  getName(){
    return this.name;
  };
}

// class AddMonster extends Monster {
//   constructor(local){
//     super(id, name, type);
//     local;
//   }
// }

const test = new Monster(1, a[0], '전기');
console.log(test); //{ id: 1, name: '피카츄', type: '전기' }
console.log(test.getName);