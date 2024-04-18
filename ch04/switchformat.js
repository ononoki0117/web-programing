const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('문자를 입력하세요:', function(ch){
    switch(ch){
        case 'y':
            console.log('네 드라이브를 포멧하겟읍니다');
            break;
        case 'y':
            console.log('아니오. 드라이브를 포맷하지 안습니다');
            break;
        default:
            console.log('유효하지 않은 문자입니다');
            break;
    }
    rl.close();
})