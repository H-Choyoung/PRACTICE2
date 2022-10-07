//? 얕은 복사
//? 깊은 복사 === 참조에 의한 복사(참조값) === 참조 데이터타입(reference datatype)

// let a = [1,2,3];
// let b = [1,2,3];
// //a와 b는 주소가 다르다. 
// //데이터를 넣는 것 === 메모리에 '할당'하는 것 
//이름만 다르고 같다 === '얕은 복사'
//ex: 도로명 주소와 지번 주소의 차이 

// let c = 1;
// let d = 1;

// console.log(c === d); //true
// console.log(b === a); //false

//--------------------------------------------------------

// let a = [1,2,3];
// let b = a;

// b.push(4);
// console.log(a, b); //[ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]

//--------------------------------------------------------

// let a = [1,2,3];
// let b = [1,2,3];

// b.push(4);
// console.log(a, b); //[ 1, 2, 3 ] [ 1, 2, 3, 4 ]

//--------------------------------------------------------
//아래는 모두 같은 기능이다. 

//map 축약형
let a = [2,3,4];
let b = a.map((value) => value);

//map 함수
a.map(function(value) {
  return value;
})

//map 메서드의 원형
function cmdMap(arr) {
  let temp = [];
  arr.forEach(function(value){
    temp.push(value);
  });
  return temp;
}

//map 메서드의 완전 명령형(C스러운)
function cmdMapTwo(arr){
  let temp = [];
  for(let i = 0; i < arr.length; i++) {
    temp[temp.length] = arr[i];
  }
  return temp;
}

console.log(a===b); //false

//--------------------------------------------------------
