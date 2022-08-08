import { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryMessagesCollection } from "services/firebase";
import { ChatMessage } from "./chat-msg";
import { SendMessage } from "./send-msg";

function ChatRoom() {
  const [messages] = useCollectionData(queryMessagesCollection);
  const placeholder = useRef();

  useEffect(() => {
    placeholder.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <>
      <main>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={placeholder}></span>
      </main>
      <SendMessage />
    </>
  );
}

export { ChatRoom };