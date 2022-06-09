import ReactModal from "react-modal";
import "./Modal.module.scss";

interface ModalProps {
  closeModal: () => void;
  isOpen: boolean;
  children: JSX.Element;
}

export const Modal = ({ closeModal, isOpen, children }: ModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modal as">
      {children}
    </ReactModal>
  );
};
