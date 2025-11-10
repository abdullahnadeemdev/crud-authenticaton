import { NavLink } from "react-router";
import Button from "../../components/shared/button/Button";

const SignUp = () => {
  return (
    <div className="w-full flex items-center h-screen">
      <div className=" sm:max-w-[500px] m-4 border border-chineseViolet p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
            SignUp
          </h1>
          <input
            type="text"
            className="border block mb-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
            placeholder="Name"
          />
          <input
            type="email"
            className="border block mb-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
            placeholder="Email"
          />
          <input
            type="password"
            className="border block mb-8 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
            placeholder="password"
          />
          <NavLink to="/login">
            <Button className="w-full px-15 mb-2">Register</Button>
          </NavLink>
          <NavLink to="/login">
            <Button className="w-full mb-2">Login</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
