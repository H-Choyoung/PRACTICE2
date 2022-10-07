//배열메서드를 지원하지 않으면, 우리는 모두 함수로 만들어 사용해야 한다.
//폴리필(polyfill)
// indexOf() 배열 메서드의 원형

let example = [1,2,3,4,5,7,8,9];

function indexOfPolyfill(arr, target) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === target) {
      return i; //배열에 요소가 있을 시 index 반환
    }
  } return -1;
} 
console.log(indexOfPolyfill(example, 6)); //-1(해당 배열에 없음)
console.log(indexOfPolyfill(example, 5)); //4(4번째 자리에 있음)