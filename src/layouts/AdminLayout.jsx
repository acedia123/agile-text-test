import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import bar from "../assets/img/bar.png";
import logo from "../assets/img/Logo.png";

export default function AdminLayout({ children }) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <div className={"AdminLayout"}>
      <Sidebar />
      <div className={"app__container"}>
        <div className="admin__header">
          <div className="wrapper">
            <div className="action">
              <button
                className="btn-icon-hover"
                onClick={() => setIsOpenDialog(!isOpenDialog)}
              >
                <img src={bar} alt="" />
              </button>
              <div className={"small-sidebar " + (isOpenDialog && "--open")}>
                <ul>
                  <li>
                    <a href="/">Post</a>
                  </li>
                  <li>
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="logo small-logo">
              <a href="/">
                <img src={logo} alt="Logo" className="h-100 w-100" />
              </a>
            </div>
          </div>
        </div>
        <div className={"scrollable__content"}>
          <div className={"main"}>
            <div className="admin__wrapper">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
