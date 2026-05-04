import { useState } from "react";
import "./App.css";

function FormInput({ children }) {
  return (
    <div className="page">
      <div className="card">{children}</div>
    </div>
  );
}

FormInput.Label = function Label({ children }) {
  return <label className="label">{children}</label>;
};

FormInput.Field = function Field({ type = "text", placeholder, value, onChange, name }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="input"
    />
  );
};

FormInput.HelperText = function HelperText({ children }) {
  return <p className="helper">{children}</p>;
};

FormInput.Error = function Error({ children }) {
  return <p className="error">{children}</p>;
};

FormInput.Button = function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn-primary">
      {children}
    </button>
  );
};

export default function CompoundFormDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      setError("Please enter your full name");
      setMessage("");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address");
      setMessage("");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setMessage("");
      return;
    }

    setError("");
    setMessage(`Welcome, ${formData.name} ✅`);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", password: "" });
    setMessage("");
    setError("");
  };

  return (
    <FormInput>
      <h1 className="title">Create Account</h1>

      <FormInput.Label>Full Name</FormInput.Label>
      <FormInput.Field
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <FormInput.Label>Email Address</FormInput.Label>
      <FormInput.Field
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <FormInput.Label>Password</FormInput.Label>

      <div className="password-box">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="input"
        />
        <button
          type="button"
          className="show-btn"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <FormInput.HelperText>
        Fill in your details to continue. Clean reusable compound form design.
      </FormInput.HelperText>

      {error && <FormInput.Error>{error}</FormInput.Error>}
      {message && <p className="success">{message}</p>}

      <div className="btn-row">
        <FormInput.Button onClick={handleSubmit}>Submit</FormInput.Button>

        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </FormInput>
  );
}
