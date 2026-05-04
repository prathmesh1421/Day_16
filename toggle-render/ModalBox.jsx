function ModalBox({ isOpen, onToggle }) {
  return (
    <div>
      <button onClick={onToggle}>Open Modal</button>

      {isOpen && (
        <div style={styles.overlay} onClick={onToggle}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Modal Box</h2>
            <p>This is a toggle modal</p>
            <button onClick={onToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default ModalBox;
