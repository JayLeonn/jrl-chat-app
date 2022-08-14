import { auth } from "services/firebase";
import styles from "./Chat-msg.module.css";

function ChatMessage(props) {
  const { text, uid, photoURL, displayName, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? styles.sent : styles.received;

  /**
   * Firestore returns server timestamp as seconds instead of ms
   */
  const hours = new Date(createdAt?.seconds * 1000).getHours();
  const minutes = ('0' + new Date(createdAt?.seconds * 1000).getMinutes()).slice(-2); // ensure leading zero in minutes

  return (
    <>
      <div className={`${messageClass} ${styles.message} flex-horizontal`}>
        <div className={`${styles.messageDetails} flex-horizontal`}>
          <div className={styles.displayName}>{uid === auth.currentUser.uid ? 'You' : displayName},</div>
          <div className={styles.timestamp}>{createdAt ? `${hours}:${minutes}` : "Sending..."}</div>
        </div>

        <img className={styles.img} alt="profile" src={photoURL} />
        <p className={styles.messageContent}>{text}</p>
      </div>
    </>
  );
}

export { ChatMessage };