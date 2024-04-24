const name = "이창현";
const age = 25;
const height = 178.5;

// 옛날 방법
console.log("My name is " + name + ", " + "My age is " + age + ", My height is " + height);

// 템플릿 문자열(편하다)
console.log(`My name is ${name}, My age is ${age}, My height is ${height}`);

// 옛날 방법 개행
console.log("My name is " + name + "\n" + "My age is " + age + "\n" + "My height is " + height);

// 백틱내부 개행
console.log(`My name is ${name}
My age is ${age}
My height is ${height}`
);

const say = `안녕맨은 나에게 이렇게 말했다 "안녕"`;
const intro = `I'm a programmer` ;

// 백틱 내부 따옴표 출력
console.log(say);
console.log(intro);