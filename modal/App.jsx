import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Advanced Modal</h1>
      <p>{msg}</p>

      <button onClick={() => setOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Confirm Action"
        onConfirm={() => {
          setMsg("Confirmed ✅");
          setOpen(false);
        }}
        onCancel={() => {
          setMsg("Cancelled ❌");
          setOpen(false);
        }}
      >
        <p>Are you sure you want to continue?</p>
      </Modal>
    </div>
  );
}

export default App;
