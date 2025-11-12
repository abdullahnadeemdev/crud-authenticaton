import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useState } from "react";
import { isAuth } from "../../routes";

const Login = () => {
  let flag = isAuth;
  const navigate = useNavigate();
  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("login");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };

  const dataArr = getItem();
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
    console.log("Auth flag", dataArr);
    // flag = false;
    // console.log("Auth false", flag);

    if (validation()) {
      console.log("welcome");
      localStorage.setItem("login", JSON.stringify([...dataArr, values]));
      {
        isAuth ? navigate("/student-list") : navigate("/");
      }
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
            <div className="mb-2 ">
              <input
                type="text"
                className="border block pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <p className="text-red-300 text-start">error occured</p>
            </div>
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
