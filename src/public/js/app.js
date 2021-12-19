const massageList = document.querySelector("ul");
const messageForm = document.querySelector("form");
// socket === 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("서버와 연결.✅");
});

socket.addEventListener("message", (message) => {
  console.log("새로운 메세지: ", message.data);
});

socket.addEventListener("close", () => {
  console.log("서버와 연결이 끊김.❌");
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);
