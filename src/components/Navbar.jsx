import { Link } from "react-router";
import Logo from "../assets/Logo.svg";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";

function Navbar({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top px-5 py-4  ${
        isDark ? "bg-dark navbar-dark" : "bg-white navbar-light"
      }`}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
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
        <div className="d-flex align-items-center gap-4">
          <ul className="navbar-nav flex-row gap-4 fw-bold">
            <li className="nav-item">
              <Link
                className={`nav-link px-2 ${
                  isDark ? "text-white" : "text-dark"
                }`}
                to="/"
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
          </ul>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
