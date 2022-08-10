import { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryMessagesCollection } from "services/firebase";
import { ChatMessage } from "components/Chat-msg/Chat-msg";
import { SendMessage } from "components/Send-msg/Send-msg";
import styles from "./Chat-room.module.css";


function ChatRoom() {
  const [messages] = useCollectionData(queryMessagesCollection);
  const placeholder = useRef();

  console.log("MESSAGES:", messages);

  useEffect(() => {
    placeholder.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <main>
        {messages && messages.reverse().map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={placeholder}></span>
      </main>
      <SendMessage />
    </>
  );
}

export { ChatRoom };