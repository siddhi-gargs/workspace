// import { Hono } from "Hono";

const handleWebsocketConn = (request) => {
  const url = new URL(request.url);
  console.log(request, url.pathname);
  if (url.pathname === "/ws") {
    const { socket, response } = Deno.upgradeWebSocket(request);
    console.log(socket, response);

    socket.onopen = () => {
      console.log("connection established");
      socket.send("client can recieve this message");
    };

    socket.onmessage = (event) => {
      console.log(
        event.data,
        "this is receive data which will come in on message"
      );
    };

    return response;
  }

  return new Response("Not Found", { status: 404 });
};

Deno.serve({ port: 3000 }, handleWebsocketConn);
