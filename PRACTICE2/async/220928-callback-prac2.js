//암호화된 특수요원 정보를 해독하는 decryptData 함수 만들어보기

let i =0;
function decryptData(callback, wait, age) {
  let start = new Date().getTime();
  while(new Date().getTime() < start + wait);
  callback(`${age}세 은행원`);
}

fetchData(console.log, 1000, 20);
fetchData(console.log, 1000, 45);
fetchData(console.log, 1000, 39);

//ReferenceError: fetchData is not defined?