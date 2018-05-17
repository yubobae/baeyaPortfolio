const express = require('express');
const app = express();
//app.get을 사용하게 되면 루트 위치로 들어갔을때('/')실행할 콜백함수를 지정 할 수 있다.
app.use(express.static('public'))
//지정된 폴더 안에 있는 파일들을 아래에 지정한 get 방식으로 자동생성해서 보여줌

app.get('/', (request,response)=>{
    //.send 연결된 소켓으로 송신함.
    response.send('<h1>bobae helㄴㅇㄹㄴㄹlo</h1>')
})
app.listen(52273,()=>{
    console.log('server Running at http://127.0.0.1:52273')
})