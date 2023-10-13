import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const Layout = () => {
  const location = useLocation();
  const authRoutes = ["/login", "/signup"];


  const showNavbarAndFooter = location.pathname !== "/" && !authRoutes.includes(location.pathname);

  return (
    <div className="app">
      {showNavbarAndFooter && <Navbar />}
      <Outlet />
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};
