import React from "react";
import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "services/firebase";
import { SignIn } from "components/sign-in";
import { SignOut } from "components/sign-out";

function App() {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <div className="App">
      <header>
        <h1>🔥 gh-pages + google sign-in 🔥</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function ChatRoom() {
  return (
    <div>SUCCESS!</div>
  )
}

/* function ChatMessage() {
  return (
    <div>MSG!</div>
  )
} */

export default App;
