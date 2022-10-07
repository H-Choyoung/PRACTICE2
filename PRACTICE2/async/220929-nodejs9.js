//node.js-9 | 동기, 비동기 처리를 모르면 벌어지는 일(feat. 메모장 만들기 앱)
//예제에서는 node.js가 지원하는 file system모듈로 간단한 메모장을 만드는(쓰기, write) 애플리케이션을 수단으로 동기, 비동기 컨셉을 들여다보자

const fs = require('fs');

const memoData = "Always go with your passion. Never ask yourself if it's realistic or not.";

function memoMaker(directoryName, fileName, data) {
  let combinePath = './' + directoryName + fileName;
}