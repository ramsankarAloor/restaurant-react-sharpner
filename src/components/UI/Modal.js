import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const modalPortalDest = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onBackdropClick} />, modalPortalDest)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPortalDest
      )}
    </>
  );
};

export default Modal;
