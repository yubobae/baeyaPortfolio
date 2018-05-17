const express = require('express');
const app = express();

//이부분은 데이터 베이스 부분을 대신해서 여기에 작성함.
const item = [{
name:'보배',
age:'27'
},
{
name:'경희',
age:'29'
},
{
name:'정환',
age:'20'
}];

app.use(express.static('public'))

app.all('/data',(request,response)=>{
console.log(repuest.method);
console.log(request.url);
response.send('hellow');
})
// app.get('/data.json',(request,response)=>{
//     response.send(item);
//     })

app.listen('52273',() =>{
console.log('Server Running at http://127.0.0.1:52273')
});