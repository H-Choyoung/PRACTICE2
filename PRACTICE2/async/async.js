//node.js-7 | 악명높은 비동기처리 맛보기
//왜 비동기가 어려운지에 대한 감각을 잡아보는 것을 취지로 확인하기
//이 예제는 동기적으로 평소에 사용했던 방식을 모두 어긴다. 

// let first = setTimeout(() => {
//   console.log('첫번째 setTimeout, 3초 뒤 실행');
// }, 3000);
// let second = setTimeout(() => {
//   console.log('두번째 setTimeout, 2초 뒤 실행');
// }, 2000);
// let third = setTimeout(() => {
//   console.log('세번째 setTimeout, 1초 뒤 실행');
// }, 1000);

//코드를 변형하여 순차적으로 처리되게..
// let first2 = setTimeout(() => {
//   console.log('첫번째 setTimeout, 3초 뒤 실행');
//   let second2 = setTimeout(() => {
//     console.log('두번째 setTimeout, 2초 뒤 실행');
//     let third2 = setTimeout(() => {
//       console.log('세번째 setTimeout, 1초 뒤 실행');
//       let fourth = setTimeout(() => {
//         console.log('네번째 setTimeout, 1초 뒤 실행');
//         let fifth = setTimeout(() => {
//           console.log('다섯번째 setTimeout, 1초 뒤 실행');
//         }, 1000);
//       }, 1000);
//     }, 1000);    
//   }, 2000);
// }, 3000);


// let test = new Promise(function(resolve, reject){
//   console.dir(resolve);
// });
// console.dir(test);
// [Function (anonymous)]
// Promise { <pending> }
//pending : 보류(태스크에 올려놨다)

//익명
let test = new Promise(function(resolve, reject){
  console.log(typeof resolve); //func
  console.log(typeof reject); //func
  console.dir(resolve); //[Function (anonymous)]
});

//기명 
function exe(resolve, reject){
}
let test2 = new Promise(exe);
//실제로 기능하진 않음