import { useEffect } from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, title, children, onConfirm, onCancel }) {
  // ESC key + scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Portal (best practice)
  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>✖</button>

        <h2>{title}</h2>
        <div>{children}</div>

        <div style={styles.footer}>
          {onCancel && (
            <button style={styles.cancel} onClick={onCancel}>
              Cancel
            </button>
          )}
          {onConfirm && (
            <button style={styles.confirm} onClick={onConfirm}>
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "320px",
    position: "relative",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  confirm: {
    background: "black",
    color: "white",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cancel: {
    background: "#eee",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Modal;
