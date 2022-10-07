//node.js-1 | 악명높은 비동기처리 맛보기
//왜 비동기가 어려운지에 대한 감각을 잡아보는 것을 취지로 확인하기
//이 예제는 동기적으로 평소에 사용했던 방식을 모두 어긴다. 

let first = setTimeout(() => {
  console.log('첫번째 setTimeout, 3초 뒤 실행');
}, 3000);
let second = setTimeout(() => {
  console.log('두번째 setTimeout, 2초 뒤 실행');
}, 2000);
let third = setTimeout(() => {
  console.log('세번째 setTimeout, 1초 뒤 실행');
}, 1000);

//코드를 변형하여 순차적으로 처리되게..
let first2 = setTimeout(() => {
  console.log('첫번째 setTimeout, 3초 뒤 실행');
  let second2 = setTimeout(() => {
    console.log('두번째 setTimeout, 2초 뒤 실행');
    let third2 = setTimeout(() => {
      console.log('세번째 setTimeout, 1초 뒤 실행');
    }, 1000);    
  }, 2000);
}, 3000);
