import Navbar from "../shared/navbar/Navbar";
import Login from "../../Pages/login/Login.jsx";
import SignUp from "../../Pages/signUp/SignUp.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <Login />
      <SignUp /> */}
      <Navbar />
      <div className="w-full h-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
