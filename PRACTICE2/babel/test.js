import fs from 'fs';
import http from 'http'; //http는 객체이다 

console.dir(http);

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(
    JSON.stringify({
      message: 'Hello world'
    }, null, 2)
  );
})
