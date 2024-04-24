// 비구조화 할당이 없던 옛날 방법
const color = ['red', 'green', 'blue'];

let r = color[0];
let g = color[1];
let b = color[2];

console.log(r);
console.log(g);
console.log(b);

let user = {
    id  : "jamsu",
    pw  : '1234',
    name: "잠수함",
    age : 30
}

let id   = user.id  ;
let pw   = user.pw  ;
let name = user.name;
let age  = user.age ;

console.log(user.id  );
console.log(user.pw  );
console.log(user.name);
console.log(user.age );

// 배열 구조 분해
[r, g, b] = color;
console.log(r);
console.log(g);
console.log(b);

// 배열의 변수 값 변경

[b, g, r] = [r, g, b]
console.log(r);
console.log(g);
console.log(b);

// 간단한 방법
[b, g, r] = ['red', 'green', 'blue'];
console.log(r);
console.log(g);
console.log(b);

// 배열의 기본값 설정 안한경우
let [a, B, c] = ['c#', 'javascript'];
console.log(a);
console.log(B);
console.log(c);

// 배열의 기본값 설정 한경우 - 기본값이 undefined일때 
[a, B, c = 'c언어'] = ['c#', 'javascript'];
console.log(a);
console.log(B);
console.log(c);

// 일부 요소값 무시
const [A, , C, D] = ['c#', 'javascript', 'python', 'react'];
console.log(A);
console.log(C);
console.log(D);

// 배열의 나머지 요소 가지고 오기

const [a1, b1, ...rest] = ['c#', 'javascript', 'python', 'react', 'c++'];
console.log(a1);
console.log(b1);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);

// 배열끼리 결합
const arr1 = ['c#', 'javascript']
const arr2 = ['python', 'react', 'c++']
let arr3 = [...arr1, ...arr2];

console.log(arr3);

// [배열]끼리 결합
arr3 = [arr1, arr2];

console.log(arr3);

// 객체 구조 분해
user = {
    Id  : "jamsu",
    Pw  : '1234',
    Name: "잠수함",
    Age : 30
}

let {Id, Pw, Name, Age} = user;

console.log(Id  );
console.log(Pw  );
console.log(Name);
console.log(Age );

// 객체구조분해 (단순화)
let{Id1, Pw1, Name1, Age1} = {Id1:"jamsu",Pw1:'1234',Name1:"잠수함", Age1:30}
console.log(Id1  );
console.log(Pw1  );
console.log(Name1);
console.log(Age1 );

// 객체 기본값 설정
user = {
    name2: "잠수함",
    age2 : 30
};

let {id2 = 'guest', pw2 = '1234', name2, age2} = user;

console.log(id2  );
console.log(pw2  );
console.log(name2);
console.log(age2 );

// 객체의 나머지 요소 가져오기
user = {
    id  : "jamsu",
    pw  : '1234',
    name: "잠수함",
    age : 30
}

let {id3, ...rest2} = user;

console.log(id);
console.log(rest2.pw);
console.log(rest2.name);
console.log(rest2.age);