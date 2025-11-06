import { Logo } from "../../../assets/icons/index";
import Button from "../button/Button";
const Navbar = () => {
  return (
    <div className="w-full mx-auto flex items-center justify-center bg-white z-50">
      <div className="p-4 h-20 flex justify-between w-[90%]">
        <div>
          <Logo />
        </div>
        <div>
          <Button>Add Student</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
