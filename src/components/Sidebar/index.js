import React from "react";
import logo from "../../assets/img/Logo.png";
import "./Sidebar.css";

export default function Sidebar() {
  const handleClickLink = () => {};
  return (
    // shrink
    <div className={"sidebar"}>
      <div className={"header container"}>
        {/* hide */}
        <div className={"logo"}>
          <a href="/">
            <img src={logo} alt="Logo" className="h-100 w-100" />
          </a>
        </div>
      </div>
      <ul className="h-100">
        <li className="sidebar-item">
          <a href="/" onClick={() => handleClickLink(1)}>
            <span className="menu-title">Post</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="/" onClick={() => handleClickLink(1)}>
            <span className="menu-title">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
