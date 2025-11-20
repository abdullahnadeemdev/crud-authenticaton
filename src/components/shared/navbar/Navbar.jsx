import { NavLink, useNavigate } from "react-router";
import { Logo } from "../../../assets/icons/index";
import Button from "../button/Button";
const Navbar = () => {
  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("signIn");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };
  const navigate = useNavigate();

  // const dataArr = getItem();
  const handleLogout = () => {
    // const newArr = dataArr.map((item) => {
    //   if (item.isLogin === true) {
    //     item.isLogin = false;
    //     return item;
    //   } else {
    //     return item;
    //   }
    // });
    // console.log("i am new", newArr);
    // localStorage.setItem("signIn", JSON.stringify(newArr));
    sessionStorage.removeItem("login");
    navigate("/login");
    window.location.reload(false);
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
          <Button className="ml-2" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
