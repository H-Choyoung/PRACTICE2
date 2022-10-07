//setTimeout()의 비밀과 setInterval()의 관계

let count = 0;

function interval(countInt, intervalTime, limitInt) {
  setTimeout(function() {
    countInt++;
    //1. 매개변수 countInt를 1증가
    console.log(countInt); 
    //0~10까지, 1초마다 / if문의 내용이 없으면 1만 출력된다. 
    //2. 콘솔에 증가된 countInt값을 출력
    if(countInt < limitInt) {
      //3. 조건식이 참일 때 영역 내의 행동을 실행한다.
      interval(countInt, intervalTime, limitInt);
      //3-1. interval()이라는 함수를 실행한다.
      // interval()은 본인 자신이다.
      // 함수가 자신을 호출하는 행위를 '재귀함수(recursion function)'이라고 부른다.
    }
  }, intervalTime);
}
interval(count, 1000, 10);
//setTimeout()을 응용한 것이 setInterval()