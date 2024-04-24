// page 249
let dic1 = new Object();

dic1.boy = "소년";
dic1.girl = "소녀";
dic1.friend = "친구";

console.log(dic1.boy);
console.log(dic1.girl);
console.log(dic1.friend);


//page 250
let dic2 = {
    boy : '소년',
    girl : '소녀',
    friend : '친구'
};

console.log(dic2.boy);
console.log(dic2.girl);
console.log(dic2.friend);

// page 251
let dic3 = {
    boy : '소년',
    girl : '소녀',
    friend : '친구'
};

dic3.apple = '사과';
dic3.ten = 10;

console.log(dic3.apple);
console.log(dic3.ten)

// page 252
let dic4 = {
    boy : '소년',
    girl : '소녀',
    friend : '친구'
};

delete dic4.girl;
console.log(dic4.boy);
console.log(dic4.girl);
console.log(dic4.friend);

// page 253
let dic5 = {
    present : "현재"
}

console.log(dic5.present);
dic5.present = "선물";
console.log(dic5.present);

// page 254
let dic6 = {
    present : "현재"
}

//dic6 = {};
console.log(dic6.present);
dic5.present = "선물";
console.log(dic6.present);

// page 255
const unit1 = {
    attack : function(weapon){
        return `${weapon}으로 공격한다.`;
    }
}

console.log(unit1.attack("주먹"));
console.log(unit1.attack("총"));

// page 256
const unit2 = {
    attack(weapon){
        return `${weapon}으로 공격한다.`;
    }
}

let dic7 = {
    boy : '소년',
    girl : '소녀',
    friend : '친구'
};

console.log(dic7['boy'] );
console.log(dic7['girl'] );
console.log(dic7['friend'] );


// page 259
let id = "jamsu";
let pw = '1111';

let user1 = {
    id: id,
    pw: pw
};

console.log(user1.id);
console.log(user1.pw);

let user2 = {
    id,
    pw
};

console.log(user2.id);
console.log(user2.pw);

// page 260
let user3 = {
    id: "jamsu",
    pw: '1111',
    name : "1ch",
    mobile : "010-4477-XXXX",
    country : "한국"
};

for(let info in user3){
    console.log(`${info} : ${user3[info]}`);
}
