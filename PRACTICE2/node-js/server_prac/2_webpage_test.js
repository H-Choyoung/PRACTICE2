//& 2. 경로 지정
// 클라이언트 요청 처리 - GET, POST
// GET : 주소형태 요청, POST : 내부적으로 값을 전달함

const http = require('http');

http.createServer((req, res) => {
  try{
    if(req.method === 'GET'){
      if(req.url === '/') { //첫페이지. http://localhost:8080/상태
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1> hello Node </h1>');
        res.end('<p> node page </p>');
      } 
      else if(req.url === '/view'){ //http://localhost:8080/view
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1> hello View </h1>');
        res.end('<p> View page </p>');
      }
    } 
    //경로가 '/' or '/view'가 아닌 경우
    res.writeHead(404);
    res.end('Not Found');
  }
  catch(err) {
    console.error(err);
    res.writeHead(500, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(err.message);
  }
})
.listen(8080, () => {
  console.log('8080번 포트에서 서버 대기 중입니다.');
});