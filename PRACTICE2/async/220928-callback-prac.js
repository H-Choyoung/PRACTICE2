function b() {
  console.log('b');
}

function a(another) {
  console.log('a start');
  another();
  console.log('a end');
}

console.log(1);
console.log(2);
a(b);
console.log(3);
console.log(4);

//예상 : 1 -> 2 -> a start -> b-> a end -> 3 -> 4 (o)
