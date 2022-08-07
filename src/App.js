import React from "react";
import "./App.css";

import { auth } from "services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "components/sign-in";
import { SignOut } from "components/sign-out";
import { ChatRoom } from "components/chat-room";

function App() {
  const [user] = useAuthState(auth);

  console.log('USER: ', user);

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

export default App;
