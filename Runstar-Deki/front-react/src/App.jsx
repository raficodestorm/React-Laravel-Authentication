import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
import Login from './auth/Login';
import Registration from './auth/Registration';
import SellerDashboard from './sellerdashboard/SellerDashboard';
import CustomerDashboard from './customerdashboard/CustomerDashboard';
import UserLayout from "./layouts/userlayout";
import Home from "./pages/user/userfront";
import AddProduct from './admindashboard/adminpages/AddProduct';
import AdminLayout from './layouts/adminlayout';
import Admin from './pages/dashboard/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />


        <Route path="/" element={<UserLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
        </Route>

        {/* Protected Routes with role */}
        <Route
          path="/admin"
          element={
              <ProtectedRoute role="admin">
                 <AdminLayout />
              </ProtectedRoute>
          }
        >
        {/* Admin dashboard home page */}
        <Route index element={<Admin />} />

        {/* Other pages inside admin */}
        {/* <Route path="/admin/addporduct" element={<AddProduct />} /> */}

       </Route>

        <Route
          path="/vendor"
          element={
            <ProtectedRoute role="vendor">
              <SellerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoute role="customer">
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
