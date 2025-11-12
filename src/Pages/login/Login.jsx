import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
  });

  const validation = () => {
    if (!values.name) {
      setError({
        ...error,
        name: true,
      });
    }
    if (!values.email) {
      setError({
        ...error,
        email: true,
      });
    }

    if (!values.name || !values.email) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      console.log("welcome");
      navigate("/student-list");
    } else {
      console.log("error", error);
      console.log("ingo", values);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="w-full flex items-center h-screen">
      <div className=" sm:max-w-[500px] m-4 border border-chineseViolet p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
            Login
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              className="border block mb-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="border block mb-8 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {/* <NavLink to="/student-list"> */}
            <Button className="w-full mb-2" type="submit">
              Sign In
            </Button>
            {/* </NavLink> */}
          </form>

          <NavLink to="/sign-up">
            <Button className="w-full mb-2">Create New Account</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
