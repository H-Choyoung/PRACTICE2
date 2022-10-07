//& 1. 서버 구축하기 

//? 1. 서버 사용을 위해서 http 모듈을 http변수에 담는다.(http 서버가 있어야 웹 브라우저의 요청을 처리할 수 있다. )
const http = require('http'); //CJS방식 


//? 2. http 모듈로 서버를 생성한다.
//요청받고 응답할 수 있는 http.Server 개체를 만든다. 
//서버를 생성한 후, 사용자로부터 http '요청'이 들어오면 함수 내부의 코드를 실행해서 '응답'한다. 
const server = http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  //res.writeHead(상태코드, 헤더정보) : 응답 헤더에 대한 정보를 기록하는 메서드이다. 
  //상태코드 : http 상태코드로 200, 404, 500 등이 있다.
  //'text/html'은 응답 콘텐츠 형식이 html이라는 뜻이고, utf-8은 한글 표시를 하라는 뜻이다.
  response.write('<h1> 본문 </h1>');
  //res.write() : 본문(body)에 보여지는 부분을 쓰는 메서드이다. 
  response.end('<h2> Hellow node server </h2>');
  //res.end() : 응답을 종료하는 메서드이다.
})
  .listen(8080, () => {
    //.listen(포트번호, 콜백함수) : 서버와 연결할 포트번호를 지정하고, 포트 연결 완료 후 실행될 콜백함수를 입력한다. 
    console.log('8080 포트에서 서버 대기 중')
  });

//? 3. 경로 지정하기 