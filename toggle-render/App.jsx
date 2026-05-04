import Toggle from "./Toggle";
import ThemeBox from "./ThemeBox";
import ModalBox from "./ModalBox";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Toggle + Render Props</h1>

      {/* Theme Toggle */}
      <Toggle
        render={({ isOn, toggle }) => (
          <ThemeBox isDark={isOn} onToggle={toggle} />
        )}
      />

      {/* Modal Toggle */}
      <Toggle
        render={({ isOn, toggle }) => (
          <ModalBox isOpen={isOn} onToggle={toggle} />
        )}
      />
    </div>
  );
}

export default App;
