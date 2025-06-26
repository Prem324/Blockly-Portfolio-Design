import { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/Logo.svg";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";

function Navbar({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  const [collapsed, setCollapsed] = useState(true);

  const handleToggle = () => setCollapsed((prev) => !prev);
  const closeMenu = () => setCollapsed(true);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top px-5 py-4  ${
        isDark ? "bg-dark navbar-dark" : "bg-white navbar-light"
      }`}
    >
      <div className="container-fluid d-flex flex-column flex-lg-row  justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            style={{ height: 32, filter: isDark ? "invert(1)" : "none" }}
          />
          <span
            className="fw-bold fs-5"
            style={{ color: isDark ? "#fff" : "#222" }}
          >
            ANISH KUMAR SINHA
          </span>
        </div>
        <button
          className="navbar-toggler ms-2 align-self-end"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={!collapsed}
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            collapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav flex-lg-row flex-column gap-4 fw-bold align-items-lg-center align-items-start">
            <li className="nav-item">
              <Link
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
                to="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
                to="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item d-none d-md-inline">
              <span
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                Resume
              </span>
            </li>
            <li className="nav-item d-none d-md-inline">
              <span
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                Skills
              </span>
            </li>
            <li className="nav-item d-none d-md-inline">
              <span
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                Projects
              </span>
            </li>
            <li className="nav-item d-none d-md-inline">
              <span
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
              >
                Contact
              </span>
            </li>
            <li className="nav-item mt-3 mt-lg-0">
              <button
                className="btn border-0 bg-transparent ps-4"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <img src={Moon} alt="moon" style={{ height: 28 }} />
                ) : (
                  <img src={Sun} alt="sun" style={{ height: 28 }} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
