import { useEffect, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryMessagesCollection } from "services/firebase";
import { ChatMessage } from "components/Chat-msg/Chat-msg";
import { SendMessage } from "components/Send-msg/Send-msg";
import styles from "./Chat-room.module.css";


function ChatRoom() {
  const [messages] = useCollectionData(queryMessagesCollection);
  const scrollTarget = useRef();

  useEffect(() => {
    scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <main className={styles.main}>
        {messages && messages.reverse().map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={scrollTarget}></span>
      </main>
      <SendMessage />
    </>
  );
}

export { ChatRoom };