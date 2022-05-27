import { Logo } from "../../../Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo size="md" />
      </div>
    </header>
  );
};
