var userName = '이창현';
var userPw = '1111';

// page 35
function account(userId, userPw){
    console.log(userId);
    console.log(userPw);
    var savedName = '이창현';
    var savedPw = '1111';

    if (userId == savedName){
        if (userPw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}

account(userName, userPw);

// page 36
account(userName);

// page 38
function account(userId, userPw = '1111'){
    console.log(userId);
    console.log(userPw);
    var savedName = '이창현';
    var savedPw = '1111';

    if (userId == savedName){
        if (userPw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);

// page 39
function account(userId, userPw){
    console.log(userId);
    console.log(userPw);
    var savedName = '이창현';
    var savedPw = '1111';

    if (userPw == undefined){
        userPw = '1111';
    }

    if (userId == savedName){
        if (userPw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);

// page 40
function account(userId, userPw){
    console.log(userId);
    console.log(userPw);
    var savedName = '이창현';
    var savedPw = '1111';

    userPw = userPw || '1111';

    if (userId == savedName){
        if (userPw == savedPw){
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName);

