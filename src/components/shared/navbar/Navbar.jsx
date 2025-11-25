import { NavLink, useNavigate } from "react-router";
import { Logo } from "../../../assets/icons/index";
import Button from "../button/Button";
import { useAuth } from "../../../context/authContext";
const Navbar = () => {
  // const getItem = () => {
  //   let val = [];
  //   const arr = localStorage.getItem("signIn");
  //   if (arr) {
  //     val = JSON.parse(arr);
  //   }
  //   return val;
  // };
  // const dataArr = getItem();

  const isAuth = useAuth();
  const handleLogout = () => {
    isAuth.setAuth(false);
    localStorage.removeItem("logIn");
  };
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-pearl z-50">
      <div className="p-0 md:p-4 h-20 flex items-center  justify-around w-full">
        <NavLink to="/student-list">
          <div className="flex items-center ">
            <Logo />
            <p className="sm:pl-3 text-chineseViolet font-semibold xxs:text-xs sm:text-base md:text-xl xl:text-2xl">
              Student Listing
            </p>
          </div>
        </NavLink>
        <div>
          <NavLink to="/add">
            <Button>Add Student</Button>
          </NavLink>

          {location.pathname === "/userProfile" ? (
            <Button className="ml-2" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <NavLink to="/userProfile">
              <Button className="ml-2">User Profile</Button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
