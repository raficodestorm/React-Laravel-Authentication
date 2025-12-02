import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// If you're using Bootstrap + custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "../../js/user"; // only if needed and not DOM-dependent

export default function UserLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Render child pages */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bootstrap Bundle JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}
