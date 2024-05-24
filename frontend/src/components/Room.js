import React from "react";

export const Room = ({
  username,
  room,
  setUsername,
  setRoom,
  setChatScreen,
  socket,
}) => {
  const sendRoom = () => {
    socket.emit("room", room);
    setChatScreen(true);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 h-[300px] bg-indigo-600 flex flex-col space-y-4 p-3">
        <h1 className=" text-center font-bold text-2xl">Welcome to Chat</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Room"
        />
        <div
          onClick={sendRoom}
          className="hover:opacity-60 cursor-pointer text-white bg-indigo-900 h-12 pt-2 text-lg text-center rounded-lg "
        >
          Connect to Chat
        </div>
      </div>
    </div>
  );
};
