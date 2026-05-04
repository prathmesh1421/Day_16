function ThemeBox({ isDark, onToggle }) {
  return (
    <div
      style={{
        background: isDark ? "#222" : "#eee",
        color: isDark ? "#fff" : "#000",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={onToggle}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeBox;
