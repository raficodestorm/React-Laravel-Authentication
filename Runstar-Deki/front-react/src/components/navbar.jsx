import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const [user, setUser] = useState(null);

  // Load user from localStorage when component loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function (remove user from localStorage)
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Optional: refresh page
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          <span>RunStar</span>
        </Link>

        <ul className="navbar-nav ms-auto">
          {user ? (
            /* ================= LOGGED-IN USER ================= */
            <li className="nav-item dropdown user-dropdown ms-lg-3">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src={
                    user.profile_photo_path
                      ? `/storage/${user.profile_photo_path}`
                      : "/svg/user.svg"
                  }
                  alt="User"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    marginRight: "8px",
                    border: "1px solid gray",
                    objectFit: "cover",
                  }}
                />
                {user.fullname}
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile/edit">Edit Profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                </li>

                <li><hr className="dropdown-divider" /></li>

                <li>
                  <button className="dropdown-item text-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            /* ================= GUEST USER ================= */
            <li className="nav-item dropdown user-dropdown ms-lg-3">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <img
                  src="/svg/user.svg"
                  alt="User"
                  style={{
                    width: "38px",
                    height: "38px",
                    border: "1px solid gray",
                    borderRadius: "50%",
                    marginRight: "8px",
                  }}
                />
                User
              </a>

              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/register">Registration</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
