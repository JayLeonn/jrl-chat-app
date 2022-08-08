import { useState } from "react";
import { addMessage, auth } from "services/firebase";


function SendMessage() {

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    //By default, submitting a form refreshes page
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addMessage(formValue, uid, photoURL);
    setFormValue('');

  }

  return (
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="send a message" />
      {formValue.length > 255 && <div>Too long message for this rocket</div>}
      <button type="submit" disabled={!formValue || formValue.length > 255}>🚀</button>

    </form>)
}

export { SendMessage };