import { auth } from "services/firebase";
import styles from "./Chat-msg.module.css";

function ChatMessage(props) {
  const { text, uid, photoURL, displayName, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? styles.sent : styles.received;

  /**
   * Firestore returns server timestamp as seconds instead of ms
   */
  const hours = new Date(createdAt?.seconds * 1000).getHours();
  const minutes = new Date(createdAt?.seconds * 1000).getMinutes();

  return (
    <>
      <div className={`${messageClass} ${styles.message}`}>
        <p>{displayName}</p>
        <p>{createdAt ? `${hours}:${minutes}` : "Sending..."}</p>
        <p>{text}</p>
        <img alt="profile" src={photoURL} />
      </div>
    </>
  );
}

export { ChatMessage };