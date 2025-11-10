import Navbar from "../shared/navbar/Navbar";
import Router from "../../routes.jsx";
import SignUp from "../../Pages/signUp/SignUp.jsx";
import { useLocation } from "react-router";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <main>{children} </main>
      </div>
    </div>
  );
};

export default Layout;
