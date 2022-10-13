"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var a = ["피카츄", "팬텀", "이브이"];
var b = ["아구몬", "레오몬", "고스트몬"];
var c = [].concat(a, b);

// console.log(c); //[ '피카츄', '팬텀', '이브이', '아구몬', '레오몬', '고스트몬' ]
var Monster = /*#__PURE__*/ (function () {
  function Monster(id, name, type) {
    _classCallCheck(this, Monster);
    this.id = id;
    this.name = name;
    this.type = type;
  }
  _createClass(Monster, [
    {
      key: "getName",
      value: function getName() {
        return this.name;
      },
    },
  ]);
  return Monster;
})(); // class AddMonster extends Monster {
//   constructor(local){
//     super(id, name, type);
//     local;
//   }
// }
var test = new Monster(1, a[0], "전기");
console.log(test); //{ id: 1, name: '피카츄', type: '전기' }
console.log(test.getName);
