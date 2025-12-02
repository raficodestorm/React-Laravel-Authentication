import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./adminnavbar.css";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); 
  };

  return (
    <nav className="navbar sticky-top" id="header">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Search */}
        <form className="d-flex" role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn bg-white" type="submit">Search</button>
        </form>

        {/* Role Panel */}
        <div className="col-auto ms-auto">
          <h4 className="panel">{user ? user.role : "Guest"} Panel</h4>
        </div>

        {/* Notification + Profile */}
        <div className="col-auto ms-auto d-flex align-items-center">

          {/* Notification Icon */}
          <div className="position-relative me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28px"
              viewBox="0 -960 960 960"
              width="28px"
              fill="#ff0000"
              className="notification-icon"
            >
              <path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>

            <span className="badge bg-danger rounded-pill notification-badge">3</span>
          </div>

          {/* Profile Dropdown */}
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="d-flex align-items-center text-decoration-none dropdown-toggle"
              onClick={toggleDropdown}
              style={{ background: "none", border: "none" }}
            >
              <img
                src={
                  user && user.profile_photo_path
                    ? `/storage/${user.profile_photo_path}`
                    : "/svg/user.svg"
                }
                alt="User"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  border: "2px solid #ff0000",
                  borderRadius: "50%",
                }}
              />
            </button>

            <ul
              className={`dropdown-menu dropdown-menu-end ${open ? "show" : ""}`}
              aria-labelledby="profileDropdown"
            >
              {user ? (
                <>
                  <li>
                    <Link className="dropdown-item" to="/profile" onClick={() => setOpen(false)}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/dashboard" onClick={() => setOpen(false)}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile/edit" onClick={() => setOpen(false)}>
                      Edit Profile
                    </Link>
                  </li>

                  <li><hr className="dropdown-divider" /></li>

                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to="/login">Login</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}
