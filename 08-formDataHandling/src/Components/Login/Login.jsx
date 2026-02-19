import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("formData", formData);
  }

  const handleReset=()=>{
    setFormData({
    name: "",
    email: "",
    password: "",
  })
  }

  return (
    <div className="Container">
      <form action="" className="loginForm">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter name"
          type="text"
          className="inputField"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
          type="email"
          className="inputField"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="enter pass"
          type="password"
          className="inputField"
        />
        <button type="submit" className="btnSubmit" onClick={handleSubmit}>
          Submit
        </button>
        <button className="btnReset" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Login;
