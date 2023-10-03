import { useEffect, useState } from "react";
// import LightCode from "./sites/LightCode";
import io from "socket.io-client";

function App() {
  const [socket, setSocket] = useState<null | any>(null);

  useEffect(() => {
    const socketIo = io("http://localhost:81");
    setSocket(socketIo);

    // Handle connection established
    socketIo.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    // Handle connection closed
    socketIo.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    // Handle incoming messages
    socketIo.on("message", (data) => {
      console.log("Received message:", data);
    });

    return () => {
      socketIo.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", { message: "Hello, WebSocket server!" });
  };

  return (
    <>
      {/* <LightCode /> */}
      <button onClick={sendMessage}>test</button>
    </>
  );
}

export default App;
