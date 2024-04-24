function myVarTest(){
    if(true){
        var a = 10;
    }
    console.log(a);
}

myVarTest();

function myLetTest(){
    if(true){
        let b = 10;
    }
    console.log(b);
}

//myLetTest();

function myConstTest(){
    if(true){
        const x = 100;
        x = 200;
    }
}

myConstTest();