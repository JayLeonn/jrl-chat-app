import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryMessagesCollection } from "services/firebase";
import { ChatMessage } from "./chat-msg";
import { SendMessage } from "./send-msg";

function ChatRoom() {
  const [messages] = useCollectionData(queryMessagesCollection);

  return (
    <><main>
      {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
    </main><SendMessage /></>
  );
}

export { ChatRoom };