# plan of action
- Initialize Nodejs Project
- Initialize first view
- Create a room id
- Add the ability to view my own room
- Add ability to allow others to stream their video
- Add styling
- Add the ability to create messages
- Add mute button
- Add Stop Video button

## server.js 파일 생성
`$ npm init` 을 하면, 프로젝트에 package.json 파일이 생성된다. 이 파일에 패키지들의 버전 등 프로젝트의 정보들이 기록된다.

`$ npm install exress`로 express라는 웹서버 프레임워크를 설치한다. 설치와 함께 이 프레임워크의 버전 정보가 package.json에 기록되는 것을 볼 수 있다.

```javascript
const express = require("express");
const app = express();
const server = require("http").Server(app);
app.get('/',(req, res)=>{
    res.status(200).send('hello?')
})
server.listen(3030);
```
express 를 임포트하여 app이라는 서버 객체로 만든다. http 모듈을 임포트하여 app 서버로 서버를 생성한 다음, 이 서버를 3030포트에서 요청을 listen 하게 한다. 

루트 경로로 서버에 접속하면 hello? 라는 문자열을 클라이언트에게 응답하게 하였다.