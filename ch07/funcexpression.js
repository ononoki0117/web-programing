var nickName = function(){
    console.log('이예쁜');
};

nickName();

nickName = function(){
    console.log('이귀엽');
};
nickName();

// page 52

var userName = nickName;

userName();
nickName();