const express = require('express');
const app = express();

app.use(express.static('html'))

app.all('/html',(request,response)=>{
console.log(repuest.method);
console.log(request.url);
response.send('hellow');
})
// app.get('/data.json',(request,response)=>{
//     response.send(item);
//     })

app.listen('8080',() =>{
console.log('Server Running at http://127.0.0.1:8080')
});