import { Logo } from "../../../assets/icons/index";
import Button from "../button/Button";
const Navbar = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-pearl z-50">
      <div className="p-4 h-20 flex justify-between w-[90%]">
        <div className="flex items-center">
          <Logo />
          <p className="pl-3 text-chineseViolet font-semibold xxs:text-xs sm:text-base md:text-xl xl:text-2xl">
            Student Listing
          </p>
        </div>
        <div>
          <Button>Add Student</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
