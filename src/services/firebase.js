import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB74Yvm4KRKWA5YurTfD_1ImuQg5P7j9zw",
  authDomain: "jrl-chat-app.firebaseapp.com",
  projectId: "jrl-chat-app",
  storageBucket: "jrl-chat-app.appspot.com",
  messagingSenderId: "195136959092",
  appId: "1:195136959092:web:4e08c66f0f778caa9ad721",
  measurementId: "G-KVDRKG5GN3",
};
initializeApp(firebaseConfig);

const auth = getAuth();

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider);
};

export { signInWithGoogle, auth };
