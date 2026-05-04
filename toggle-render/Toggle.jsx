import { useState } from "react";
import "./Toggle.css";

function Toggle({ render }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn((prev) => !prev);

  return render({ isOn, toggle });
}

export default Toggle;
