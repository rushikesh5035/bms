import { WebSocket, WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3002 });

server.on("connection", async (socket) => {
  const user = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  console.log(user);
  socket.send("Hi there you are connected to the server");
});
