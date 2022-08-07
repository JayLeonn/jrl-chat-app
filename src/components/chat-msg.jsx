import { auth } from "services/firebase";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
        <img alt="profile" src={photoURL} />
      </div>
    </>
  );
}

export { ChatMessage }