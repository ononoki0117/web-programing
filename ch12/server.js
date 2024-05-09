let mydb;

const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ononoki0117:Kuro11350@test-cluster.kmov3ip.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster';

const express = require('express');
const app = express();

mongoclient.connect(url).then(client => {
    console.log('몽고 db 접속 성공');

    mydb = client.db('testboard');

    app.listen(8080, function () {
        console.log("포트 8080으로 접속 대기중");
    });
}).catch(err => {
    console.log(err);
});

app.get('/list', function (req, res) {
    mydb.collection('post').find().toArray().then(result => {
        console.log(result);
    })
})



