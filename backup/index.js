//express 모듈을 가져온다.
const express = require('express');

//express 모듈을 사용하여 app을 만든다.
const app = express();

// json 형태의 데이터를 요청으로 받을 수 있도록 한다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//port를 설정한다.
const port = 3000;

//mongoose를 가져온다.
const mongoose = require('mongoose');

//mongoose를 사용하여 mongodb에 연결한다.
const url = 'mongodb://root:1234@localhost:27017';
mongoose.set('strictQuery', false);
mongoose
    .connect(url)
    .then( () => console.log('몽고디비에 연결되었습니다.') )
    .catch( (err) => console.log(err) );

//app이 실행될 때 기본주소
app.get('/', (req, res) => {
    res.send('어서오쇼~! 노드서버에요~!');
});

//api 모듈 호출
const userRouter = require('./routes/users');
app.use('/users', userRouter);

//app 대기모드
app.listen(port, () => {
    console.log("Server running!");
});
