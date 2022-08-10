import { useState } from "react";
import { addMessage, auth } from "services/firebase";
import styles from "./Send-msg.module.css";

function SendMessage() {

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    //By default, submitting a form refreshes page
    e.preventDefault();

    await addMessage(formValue, auth.currentUser);
    setFormValue('');
  };

  return (
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="send a message" />
      <button type="submit" disabled={!formValue || formValue.length > 255}>🚀</button>

    </form>);
}

export { SendMessage };