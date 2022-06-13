import { IconButton } from "@mui/material";
import ReactModal from "react-modal";
import styles from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: JSX.Element;
  title: JSX.Element;
}

export const Modal = ({ closeModal, isOpen, children, title }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal as">
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title || ""}</h2>
        <div className={styles.close}>
          <IconButton size="large" aria-label="delete" color="inherit" onClick={closeModal}>
            <CloseIcon color="inherit" sx={{ width: "2rem", height: "2rem" }} />
          </IconButton>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};
