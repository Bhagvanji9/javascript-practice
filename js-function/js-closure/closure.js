// closure example1
var x = 10;
function a() {
  let y = 20;
  function b() {
    let z = 30;
    return x + y + z;
  }
  return b();
}
a();
console.log("🚀 ~ file: closure.js:11 ~ a():", a());

// closure example2

function numberGen() {
  var num = 1;
  function checkNum() {
    console.log(num);
  }
  checkNum();
  num += 3;
  return checkNum;
}
var number = numberGen();
number();

//closure example with set time out
function numberGen() {
  var num1 = 1;
  function checkNum() {
    setTimeout(() => {
      console.log(num1);
    }, 5000);
  }
  checkNum();
  num1 += 2;
  return checkNum;
}

var number1 = numberGen();
number1();

var x = 10;
function foo(a) {
  var b = 20;

  function bar(c) {
    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    return e * -1;
  }

  return bar;
}

var moar = foo(5);
moar(15);

///////////////////////////////////////////////////////////
var result = [];

for (var i = 0; i < 5; i++) {
  result[i] = (function inner(x) {
    return function () {
      console.log(x);
    };
  })(i);
}
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();

//////////////////////////////////////////////////////////
var aresult = [];

for (var i = 0; i < 5; i++) {
  aresult[i] = function () {
    console.log(i);
  };
}

aresult[0]();
aresult[1]();
aresult[2]();
aresult[3]();
aresult[4]();
