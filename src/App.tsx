import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(["Hi there", "new world"]);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    ws.onmessage = function (event) {
      const newMessage = event.data;
      // setMessage((prevMessage) => [...prevMessage, newMessage]); 
      setMessage(function (prevMessage) {
        return [...prevMessage, newMessage]
      })
    };
  }, []);

  return (
    <div className="h-screen bg-black">

      <div className="h-[95vh] overflow-y-auto p-4 space-y-2">
        {message.map(function (msg, index) {
          return (
            <div
              key={index}
              className="bg-gray-800 text-white p-2 rounded-lg max-w-sm">
              {msg}
            </div>
          );
        })}


        {/* {message.map((msg, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-2 rounded-lg max-w-sm"
          >
            {msg}
          </div>
        ))} */}
      </div>
      <div className="">
        <input type="text" placeholder="Message" />
        <button className="bg-purple-50 text-ellipsis">Send Message</button>
      </div>
    </div>
  );
}

export default App;
