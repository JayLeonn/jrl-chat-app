import { signInWithGoogle } from "services/firebase";
import styles from "./Sign-in.module.css";


function SignIn() {
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export { SignIn };