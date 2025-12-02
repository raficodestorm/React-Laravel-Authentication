// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Adminsidebar";
import AdminNavbar from "../components/Adminnavbar";
import "./admin.css";

export default function AdminLayout() {
  return (
    <>
      <div className="body">
      <AdminSidebar />
      
    
      <main className="admin-main">
        <AdminNavbar />

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
      </div>
    </>
  );
}
