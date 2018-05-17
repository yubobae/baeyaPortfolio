//node.js 에서 기본적으로 제공하는 http라는 모듈을 사용해서 서버생성하기.


const http = require('http');

//createServer : 서버생성 메서드
//매개변수 설정 첫번째 매개변수는 요청,두번째 매개변수는 응답
//서버객체가 리턴됨.
const server = http.createServer((request,response) => {
//요청정보 확인방법
console.log(request.method)
console.log(request.url)

if(request.url === '/hello'){
//응답방법
//첫번째 매개변수에 satus코드,두번째 매개변수에 헤더와 관련된 객체
//응답 헤더
response.writeHead(200,{
    'content-Type':'text/html'
})
//응답 본문
response.write('<h1>Hello</h1>')
response.end()

}else{
    //응답방법
//첫번째 매개변수에 satus코드,두번째 매개변수에 헤더와 관련된 객체
//응답 헤더
response.writeHead(200,{
    'content-Type':'text/html'
})
//응답 본문
response.write('<h1>Hello world</h1>')
response.end()

}
})
//listen.메서드는 클라이언트의 응답을 받을 준비를 함.
//1.매개변수에는 포트번호를 입력 ,2번째 매개변수는 콜백함수를 지정->서버가 정상적으로 실행되었을때 호출되는 함수 
server.listen(52273,()=>{
    console.log('server Running at http://127.0.0.1:52273')
})