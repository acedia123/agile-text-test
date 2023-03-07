import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/Logo.png";
import { login } from "../service/home";

export default function AuthLayout() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username: inputRef.current.value }).then((data) => {
      console.log(data);
      localStorage.setItem("accessToken", data.accessToken);
      window.location.href = "/";
    });
  };

  return (
    <div className="app-inner">
      <header className="app-header">
        <div className="header__logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>
      </header>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="form-group">
            <span>Username</span>
            <input type="text" ref={inputRef} />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
