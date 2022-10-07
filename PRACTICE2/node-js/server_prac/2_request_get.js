//& 2. 경로 지정 - get

const http = require('http');

//1. 요청한 url을 객체로 만들기 위해 url 모듈 사용
const url = require('url');
//2. 요청한 url 중에 QueryString을 객체로 만들기 위해 모듈 사용
const qs = require('querystring');

const server = http.createServer((req, res) => {

  //3. 로그 시작 출력
  console.log('log start');

  //4. 브라우저에서 요청한 주소를 parsing하여 객체화 후 출력
  let parsedUrl = url.parse(req.url);
  console.log(parsedUrl);
  //   Url {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: null,
  //   query: null,
  //   pathname: '/',
  //   path: '/',
  //   href: '/'
  // }

  //5. 객체화된 url 중에 쿼리스트링부분만 따로 객체화 후 출력
  let parsedQuery = qs.parse(parsedUrl.query, '&', '=');
  console.log(parsedQuery);
  //[Object: null prototype] {}

  //6. 콘솔에 로그 종료 부분을 출력
  console.log('log end');

  res.writeHead(200, {'Content-Type':'text/html; utf-8'});
  res.end('res.end! Hello');

}).listen(8080, () => console.log('server is running...'));
