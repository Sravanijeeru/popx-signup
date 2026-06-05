import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    setUser(data);
  }, []);

  if (!user) {
    return (
      <div className="mobile-container">
        <h3>No user found</h3>
      </div>
    );
  }

  return (
    <div className="mobile-container">

      <h3 style={{ marginBottom: "20px" }}>Account Settings</h3>

      <div style={{ display: "flex", alignItems: "center" }}>
        
        {/* Avatar */}
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            background: "#6C25FF",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "28px",
            marginRight: "15px",
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <p style={{ marginTop: "20px", color: "#555" }}>
        Welcome to PopX profile page
      </p>

    </div>
  );
}

export default Profile;