const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const { ExpressPeerServer } = require("peer");
const options = {
  debug: true,
};

app.use("/peerjs", ExpressPeerServer(server, options));

io.on("connection", (socket) => {
  console.log("Socket Connection Done");

  socket.on("join-room", (ROOM_ID, userName, userId) => {
    console.log(ROOM_ID, userName, userId);
    socket.join(ROOM_ID);
    setTimeout(() => {
      socket.broadcast.to(ROOM_ID).emit("user-connected", userId);
      // socket.emit("user-connected", userId);
    }, 1000);

    socket.on('sendmessage' , (message)=>{
      io.to(ROOM_ID).emit("getmessage",({"message":message,"userName":userName}))
    })
    
  socket.on('leave room',()=>{
    console.log("leave room",userName,userId,ROOM_ID);
    socket.broadcast.to(ROOM_ID).emit('leave room user',{userName:userName,userId:userId,message:' has left this room.'})
    socket.leave(ROOM_ID);
  })

  });
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
