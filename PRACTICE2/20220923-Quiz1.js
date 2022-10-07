//[exam] Quiz-1 | 문제 발견하기

//해당 퀴즈의 기술적 성격
//* 1. 문자열 기반의 HTML 형태로 가공처리를 담당하는 알고리즘으로 구성된 함수로, 캡슐화 진행 -> react의 component 개념
//* 2. 객체타입의 인수(arguments) 도입 -> react props 개념
//* 3. 백엔드에서 매우 자주 사용하게 될 예외처리(exception handling)방식, try ~ chtch, finally 작성법
//* 4. 데이터베이스에 저장할 때 사용되는 데이터 용량처리(실제로는 예제처럼 사용되진 않는다) 맛보기 
//* 5. 프론트엔드에서 사랑받는 확장플러그인, live server의 원리 접근하기

//? 해당 코드의 프로그램은 어떤 원리를 취하고 있을까?
//? 제목처럼 해당 코드는 동작과정에서 문제는 없지만 최종적으로는 '치명적인 문제'가 존재한다. 그게 뭘까? 

//-----------------------------------------------------------------

const http = require('http');
const fs = require('fs');

const setDomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = [];
  try {
    if(typeof tagName === 'string' && typeof props === 'object' && typeof attributeName === 'string') {
      if(getDataArr.length === 0) {
        let tempArray = [];
        tempArray.push('<');
        tempArray.push(tagName + '\u00A0' + attributeName + "=\"");
        //\u00A0는 공백 문자(JS에서 줄바꿈 안하는 빈칸)
        for(const keys in props) {
          tempArray.push('\u00A0' + keys + ":" + props[keys] + ";");
        };
        tempArray.push("\">");
        getDataArr.push(tempArray.join(''));
      };
    }
    getDataArr.push(content);
    getDataArr.push(`</${tagName}>`);
  } catch(e) {
    console.error(e, 'need checking arguments data type');
  } finally {
    return getDataArr.join("");
  }
}

let dynamicElement = setDomComponent('div', 'hello', 'style', {'width':'100px', 'height':'100px', 'background-color':'salomon'});

const mainPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  ${dynamicElement}
</body>
</html>
`;

const byteChecker = string => {return string.length * 2 + 'byte'};

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type':'text/html'});
  response.write(mainPage);
  response.end();
}).listen(5555, () => {
  console.log(byteChecker(mainPage), 'server listening on port 5555');
});