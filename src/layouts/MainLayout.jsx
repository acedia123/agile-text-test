import React, { useEffect, useState } from "react";
import logo from "../assets/img/Logo.png";
import chatLogo from "../assets/img/Group 62.png";
import { logout } from "../service/home";

export default function MainLayout({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("accessToken");
    await logout(token).then((data) => {
      console.log(data);
      localStorage.removeItem("accessToken");
      window.location.reload();
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
        <div className="header__actions">
          {isLogin ? (
            <>
              <a href="/admin" className="btn btn-primary">
                Profile
              </a>
              <button className="btn btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <a href="/login" className="btn btn-primary">
              Sign In
            </a>
          )}
        </div>
      </header>
      <div className="app-container">{children}</div>
      <div className="footer-separate"></div>
      <footer className="app-footer">
        <div className="footer__top">
          <div className="footer__top-left">
            <div className="logo-wrapper">
              <img src={logo} alt="Logo" />
              <span>DataWarehouse</span>
            </div>
            <p className="normal-text bold-600">
              <b>
                Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
              </b>
            </p>
            <span className="normal-text">
              info@warehouse.project 1-232-3434 (Main)
            </span>
          </div>
          <div className="footer__top-right">
            <div>
              <span className="list-header">About</span>
              <ul>
                <li>Profile</li>
                <li>Features</li>
                <li>Careers</li>
                <li>DW News</li>
              </ul>
            </div>
            <div>
              <span className="list-header">Help</span>
              <ul>
                <li>Support</li>
                <li>Sign up</li>
                <li>Guide</li>
                <li>Reports</li>
                <li>Q&A</li>
              </ul>
            </div>
            <div>
              <span className="list-header">Social Media</span>
              <ul className="d-flex-align-center list-button">
                <li>
                  <button className="btn-icon"></button>
                </li>
                <li>
                  <button className="btn-icon"></button>
                </li>
                <li>
                  <button className="btn-icon"></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="text">
            © Datawarehouse™, 2020. All rights reserved. <br />
            Company Registration Number: 21479524.
          </p>
          <button className="btn-icon">
            <img src={chatLogo} alt="" />
          </button>
        </div>
      </footer>
    </div>
  );
}
