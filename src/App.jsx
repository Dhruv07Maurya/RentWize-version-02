import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import MyState from "./context/myState";
import ProductInfo from "./components/Productinfo";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Signup from "./components/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
           <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedaAdmin>
                  <Dashboard />
                </ProtectedaAdmin>
              }
            />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/Cart" eledment={<Cart />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedaAdmin>
                  <AddProduct />
                </ProtectedaAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedaAdmin>
                  <UpdateProduct />
                </ProtectedaAdmin>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </MyState>
    </div>
  );
};

export default App;

//user protected route
export const UserProtected = ({ children }) => {
  const userEmail = localStorage.getItem("userEmail");
  const userPassword = localStorage.getItem("userPassword");
  if (userEmail && userPassword) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

// export default UserProtected;

//admin protected route

export const ProtectedaAdmin = ({ children }) => {
  const userData = localStorage.getItem("user");
  const userObject = JSON.parse(userData);
  const email = userObject.user.providerData[0].email;
  const adminPassword = localStorage.getItem("adminPassword");

  // Check if the stored credentials match the admin credentials
  if (email === "admin@gmail.com") {
    return children; // Allow access to the protected route
  } else {
    return <NoPage />;
    // return children
  }
};


// export default ProtectedaAdmin;