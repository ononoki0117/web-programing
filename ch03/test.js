// 변수 찍어 보기
var msg = 'hello';
msg = 'world';
console.log(msg);

// 막 넣을 수 있음
msg = 100;
console.log(msg);

// 내용물 대입
var con = msg;
msg = 11100;
console.log(con);
console.log(msg);

// 요상한 것도 가능
var _ = false;
var $ = "$";

console.log(_ + $);

// 숫자형
var m = 1, s = 2, g = 3;
console.log(typeof m);

//맛있는 바나나
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())

//문자열
var s = "string";
var ss = "string srting ";
console.log(s + ss);
console.log(s.length);
var sss = 'sssss';

//boolean
var b = true;
console.log(b);

//null
var nullvar = null;
console.log(nullvar);
console.log(Boolean(nullvar));

var nothing;
console.log(nothing);

console.log(ss);
ss = undefined;
console.log(ss);

//object
var obj = {json : "json"};
console.log(obj);

var array = new Array();
array.push(s);
array.push(ss);
array.push(sss);

console.log(array);

var a = 2;
var b = 3;

console.log('더하기 결과 : ' + (a + b));
console.log('빼기 결과 : ' + (a - b));
console.log('곱하기 결과 : ' + (a * b));
console.log('나누기 / 결과 : ' + (a / b));
console.log('나누기 % 결과 : ' + (a % b));
console.log('거듭곱 결과 : ' + (a ** b));

console.log('hello' + 'world');
console.log('긴급출동 ' + 119);
console.log('1' + 1);

console.log(+'1234' + 1);
console.log(+true);
console.log(+null);

console.log(+'1234' + 444);
console.log(+'1234' - 444);
console.log(+'1234' / 444);
console.log(+'1234' % 444);
console.log(+'1234' * 444);
//console.log(+'1234' ** 444);


var a = 1;
var b = a + 2;
var c = b - a;

console.log(a);
console.log(b);
console.log(c);

a = a + 2;
console.log(a);

b = b - 2;
console.log(b);

