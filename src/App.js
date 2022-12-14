import React from "react";
import "./styles/App.css";

import { auth } from "services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn } from "components/Sign-in/Sign-in";
import { ChatRoom } from "components/Chat-room/Chat-room";
import { HeaderBar } from "components/Header-bar/Header-bar";

function App() {
  const [user] = useAuthState(auth); // Uses Firebase onAuthStateChanged() that verifies user by checking token stored in indexedDB

  return (
    <div className="app-container">
      <div className="star">{/* There be stars in them there wars */}</div>
      <HeaderBar />

      <section className="flex-vertical section">{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
