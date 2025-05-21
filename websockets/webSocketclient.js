const socket = new WebSocket("ws://localhost:3000/ws");

socket.onopen = () => {
  console.log("connected to server...");
  socket.send("client ------> server");
};

socket.onmessage = (event) => {
  console.log(event, event.data);
};
