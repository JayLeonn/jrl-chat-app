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
    <form onSubmit={sendMessage} className={`${styles.form} flex-horizontal`}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type something..." className={styles.sendMessage} />
      <button type="submit" disabled={!formValue || formValue.length > 255} className={styles.sendButton}>🚀</button>

    </form>);
}

export { SendMessage };