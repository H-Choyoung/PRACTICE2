//파일 만들기
const fs = require('fs'); //파일시스템

fs.writeFile('./test.txt', 'applejuice', function(error){
  if(error) {
    throw error;
  }
});
//* 백엔드에서만 가능한 영역
//* 위에서는 권한 요청이 필요 없는 열린 영역 
//* '권한 요청'이 필요할 경우 : request
//* 요청에 응답 : response

//폴더 만들기
fs.mkdir('./mkdir-test', function(error){
  if(error) {
    throw error;
  }
});