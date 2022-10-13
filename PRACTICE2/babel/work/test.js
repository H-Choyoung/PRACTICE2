"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _http = _interopRequireDefault(require("http"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//http는 객체이다 

console.dir(_http["default"]);
var server = _http["default"].createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  res.end(JSON.stringify({
    message: 'Hello world'
  }, null, 2));
});