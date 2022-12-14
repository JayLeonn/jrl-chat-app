import { auth } from "services/firebase";
import styles from "./Sign-out.module.css";

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()} className={styles.signOutButton}>Sign out</button>
  );
}

export { SignOut };