import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'







function App() {

  const [chatMessages, setChatMessages] = useState( //useState gives 2 values, the current data and the updater function | also Array Destructuring
    [{
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1'
    },
    {
      message: 'Hello! How can I help you?',
      sender: 'robot',
      id: 'id2'
    },
    {
      message: "can you get me today's date?",
      sender: "user",
      id: 'id3'
    },
    {
      message: "Today is November 12",
      sender: "robot",
      id: 'id4'
    }]
  );
  // const [chatMessages, setChatMessages] = array; // Shortcut: Array Destructuring ( 0, 1 is the case here)
  // const chatMessages =  array[0];  //  the current data
  // const setChatMessages = array[1]; //updater function

  return (
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );

}

export default App