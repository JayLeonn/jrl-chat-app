import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import firebaseConfig from "./firebase-config.json";

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore(app);

/**
 * Google sign-in method
 */
const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Ensure that a firestore document id field is returned
 * https://github.com/andipaetzold/react-firehooks/issues/15
 */
const converter = {
  toFirestore: (data) => data,
  fromFirestore: (snap) => ({
    id: snap.id,
    ...snap.data(),
  }),
};

const messagesRef = collection(firestore, "messages").withConverter(converter);

/**
 * Limit queried messages from /messages collection to 20
 */
const queryMessagesCollection = query(messagesRef, orderBy("createdAt", "desc"), limit(20));

/**
 * Add Message to /messages collection in firestore
 * @param formValue
 * @param user
 */
const addMessage = async (formValue, user) => {
  try {
    await addDoc((messagesRef), {
      text: formValue,
      createdAt: serverTimestamp(),
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName
    });
  } catch (error) {
    console.error(error);
  }
};

export { signInWithGoogle, addMessage, auth, firestore, queryMessagesCollection };