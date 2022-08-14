import React from "react";
import "./styles/App.css";

import { auth } from "services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "components/Sign-in/Sign-in";
import { ChatRoom } from "components/Chat-room/Chat-room";
import { HeaderBar } from "components/Header-bar/Header-bar";

function App() {
  const [user] = useAuthState(auth);

  console.log('USER: ', user);

  return (
    <div className="app-container">
      <HeaderBar />

      <section className="flex-vertical section">{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
