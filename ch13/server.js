let mydb;

const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://ononoki0117:Kuro11350@test-cluster.kmov3ip.mongodb.net/?retryWrites=true&w=majority&appName=test-cluster';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const objID = require('mongodb').ObjectId;

app.set('view engine', 'ejs');

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
    res.render('list.ejs', { data: result });
  })

});

app.get('/enter', function (req, res) {
  res.render('enter.ejs');
});

app.post('/save', function (req, res) {
  console.log(req.body.title);
  console.log(req.body.content);

  mydb.collection('post').insertOne(
    {
      title: req.body.title,
      content: req.body.content,
      date: req.body.someDate,
    }).then(result => {
      console.log(result);
      console.log('데이터 추가 성공');
    });
  console.log('저장완료');
});

app.post('/delete', function (req, res) {
  console.log(req.body._id);
  req.body._id = new objID(req.body._id);
  mydb.collection('post').deleteOne(req.body)
    .then(result => {
      console.log('삭제완료');
      res.status(200).send();
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
});


