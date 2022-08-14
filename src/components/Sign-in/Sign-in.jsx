import { signInWithGoogle } from "services/firebase";
import GoogleButton from 'react-google-button';
import styles from "./Sign-in.module.css";


function SignIn() {
  return <GoogleButton className={`${styles.signIn} center-content`} type="dark" onClick={signInWithGoogle}>Sign in with Google</GoogleButton>;
}

export { SignIn };