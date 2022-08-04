import { signInWithGoogle } from "services/firebase";

function SignIn() {
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

export { SignIn };