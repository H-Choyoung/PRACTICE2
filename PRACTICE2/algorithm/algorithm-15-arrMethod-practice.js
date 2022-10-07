// algorithm-15 | 소설가 되기
// 여러가지 배열메서드를 사용해서 "9월 1일" 부분을 "9월 9일 추석연휴"로 편집한 후 문서에 출력하세요!

let example = `오늘은 9월 1일 입니다.`;

// console.log(example);
let exampleString = Array.from(example);
// console.log(exampleString); //문자열을 배열로 조각냄

// console.log(exampleString.slice(0, 7)); //오늘은 9월 
let exampleStringTwo = exampleString.slice(0, 7); //필요한 만큼을 두고 잘라냄
let changeString = ['9일 추석연휴']; //추가할 배열을 제작
console.log(exampleStringTwo.concat(changeString)); 
let stringarr = exampleStringTwo.concat(changeString); //잘라낸 배열에 새로운 배열을 추가
console.log(stringarr.join('')); //완료


