import { Logo } from "../../../Logo";
import styles from "./Header.module.scss";
import { ReactComponent as SettingsIcon } from "../../../../assets/icons/settings.svg";
import { useState } from "react";
import { Modal } from "../../../components/Modal";

export const Header = () => {
  const [isSettingsModalOpened, setIsSettingsModalOpened] = useState(true);

  const openModal = () => {
    setIsSettingsModalOpened(true);
  };

  const closeModal = () => {
    setIsSettingsModalOpened(false);
  };

  return (
    <>
      <Modal isOpen={true} closeModal={closeModal}>
        <div className={styles.modal}>Modaleeeq</div>
      </Modal>
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo size="sm" />
          <button className={styles.settings}>
            <span>Settings</span>
            <SettingsIcon />
          </button>
        </div>
      </header>
    </>
  );
};
