import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryx } from "services/firebase";
import { ChatMessage } from "./chat-msg";

function ChatRoom() {
  const [messages] = useCollectionData(queryx);

  console.log("msgs", messages);

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </main>
    </>
  );
}

export { ChatRoom };