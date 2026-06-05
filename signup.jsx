import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "");
    }

    if (name === "company") {
      newValue = value.replace(/[^a-zA-Z ]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // clear error for that field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // validation
  const validate = () => {
    let temp = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) temp.name = "Name is required";

    if (!formData.phone) {
      temp.phone = "Phone is required";
    } else if (formData.phone.length !== 10) {
      temp.phone = "Phone must be 10 digits";
    }

    if (!formData.email) {
      temp.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      temp.email = "Enter valid email";
    }

    if (!formData.password) {
      temp.password = "Password is required";
    } else if (formData.password.length < 6) {
      temp.password = "Min 6 characters required";
    }

    if (!formData.company.trim()) {
      temp.company = "Company is required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  // submit
  const handleSubmit = () => {
    if (!validate()) return;

    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="mobile-container">
      <h2>Create your PopX account</h2>

      {/* NAME */}
      <input
        name="name"
        placeholder="Full Name*"
        value={formData.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      {/* PHONE */}
      <input
        name="phone"
        placeholder="Phone Number*"
        value={formData.phone}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.phone}</p>

      {/* EMAIL */}
      <input
        name="email"
        placeholder="Email Address*"
        value={formData.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      {/* PASSWORD */}
      <input
        name="password"
        type="password"
        placeholder="Password*"
        value={formData.password}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      {/* COMPANY */}
      <input
        name="company"
        placeholder="Company Name"
        value={formData.company}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.company}</p>

      {/* AGENCY */}
      <div style={{ margin: "10px 0" }}>
        <p>Are you an Agency?</p>

        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={formData.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={formData.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#6C25FF",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;