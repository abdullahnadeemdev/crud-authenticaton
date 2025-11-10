import { NavLink } from "react-router";
import { Logo } from "../../../assets/icons/index";
import Button from "../button/Button";
const Navbar = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-pearl z-50">
      <div className="p-0 md:p-4 h-20 flex items-center justify-around w-full">
        <div className="flex items-center">
          <Logo />
          <p className="pl-1 sm:pl-3 text-chineseViolet font-semibold xxs:text-xs sm:text-base md:text-xl xl:text-2xl">
            Student Listing
          </p>
        </div>
        <div>
          <NavLink to="/add">
            <Button>Add Student</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
