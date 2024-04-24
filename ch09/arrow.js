// 화살표를 사용한 함수
let plus1 = (a,b)=>{
    return a+b;
}

let result1 = plus1(10, 20);
console.log('두 수의 합 : ' + result1);


// 함수 내부 return 밖에 없는 경우
let plus2 = (a,b)=>a+b;

let result2 = plus2(10, 20);
console.log('두 수의 합 : ' + result2);


// 매개 변수 하나일 경우
let plus3 = a => a + 1;

let result3 = plus3(10);
console.log('값의 1 증가 : ' + result3);

// 매개변수가 하나도 없는 경우
let plus4 = () => '플러스';

let result4 = plus4();
console.log('A' + result4);
