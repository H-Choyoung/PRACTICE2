const promise1 = new Promise((resolve, reject) => {
  //비동기작업
});
//1. 하나의 변수로 끝까지 관리하는 것이 가독성과 유지보수에 좋음
//2. new promise로 promise객체를 새롭게 생성(생성자 함수)
//3. 생성자는 특별한 '함수' 하나를 인자로 받는다.(해당에서는 화살표 함수) = executor
// pending = 비동기 작업 대기상태
// resolve = 비동기 작업 성공
// reject = 비동기 작업 실패
//*비동기 작업은 언제 끝날지 모르기 때문에 일단 작업한 뒤에, 끝나고 난 다음의 동작 설정 : 성공했을 때 -> then 메소드, 실패했을 때 -> catch 메소드
//'기다리는 작업'이 없다면 비동기를 쓸 필요는 없다. 

const promise2 = new Promise((resolve, reject) => {
  // resolve(); //실행결과: then
  reject(); //실행결과: catch
});
promise2
  .then(() => {
    console.log('then');
  })
  .catch(() => {
    console.log('catch');
  });


//?재사용하기
//new Promise()를 그대로 리턴하는 함수로 만들기
function startAsync(age){
  return new Promise((resolve, reject) => {
    if(age>20) resolve();
    else reject();
  })
}
setTimeout(() => {
  const promise2 = startAsync(21);
  promise2
  .then(() => {
    console.log('then is success 1');
  })
  .catch(() => {
    console.log('catch is fail 1');
  });
  const promise3 = startAsync(10);
  promise3
  .then(() => {
    console.log('then is success 2');
  })
  .catch(() => {
    console.log('catch is fail 2');
  })
}, 1000);
//then is success 1
//catch is fail 2

//? 작업 결과를 전달하기
//resolve, reject 함수에 인자를 전달함으로써 then, catch 함수에서 비동기 작업으로부터 정보를 얻을 수 있음

function startAsyncTwo(age){
  return new Promise((resolve, reject) => {
    if(age>20) resolve(`${age} success`); //20이상은 성공
    else reject(new Error(`${age} is not over 20`)); //20이하는 실패
  })
}
setTimeout(() => {
  const promise4 = startAsyncTwo(21);
  promise4
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
  const promise5 = startAsyncTwo(10);
  promise5
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
}, 1000);