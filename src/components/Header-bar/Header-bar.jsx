import { SignOut } from "components/Sign-out/Sign-out";
import styles from "./Header-bar.module.css";


function HeaderBar() {
  return (
    <header className={`${styles.header} flex-horizontal justify-space-between align-center`}>
      <h1>JRL Chat</h1>
      <SignOut />
    </header>);

}

export { HeaderBar };