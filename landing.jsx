import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="mobile-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Welcome to PopX
      </h1>

      <p
        style={{
          color: "#7c7c7c",
          lineHeight: "1.5",
          marginBottom: "25px",
        }}
      >
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/signup")}
        style={{
          width: "100%",
          padding: "14px",
          background: "#6C25FF",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginBottom: "10px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        style={{
          width: "100%",
          padding: "14px",
          background: "#CEBAFB",
          color: "#000",
          border: "none",
          borderRadius: "6px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Landing;