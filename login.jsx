import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
      alert("No account found. Please sign up first.");
      navigate("/signup");
      return;
    }

    if (email === user.email && password === user.password) {
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="mobile-container">

      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Login to PopX
      </h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "14px",
          background: "#6C25FF",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;