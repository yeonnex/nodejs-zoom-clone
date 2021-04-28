// 프론트엔드에서 실행할 스크립트
// 유저의 미디어를 가져오는 부분, 프로미스를 사용
const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myVideo = document.createElement("video");
console.log(videoGrid)
myVideo.muted = true;

let myVideoStream;
navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
  });

socket.emit('join-room', ROOM_ID);
socket.on('user-connected', ()=>{
  connectToNewUser();
})

const connectToNewUser = ()=>{
  console.log('new user')
}
const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video)
};
