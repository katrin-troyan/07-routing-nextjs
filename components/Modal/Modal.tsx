import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
  const modalContainer = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(modalContainer);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.removeChild(modalContainer);
    };
  }, [modalContainer, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <NoteForm onClose={onClose} />
      </div>
    </div>,
    modalContainer
  );
};

export default Modal;
