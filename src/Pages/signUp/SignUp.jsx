import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useState } from "react";

const SignUp = (props) => {
  const navigate = useNavigate();
  // const getItem = () => {
  //   let val = [];
  //   const arr = localStorage.getItem("signIn");
  //   if (arr) {
  //     val = JSON.parse(arr);
  //   }
  //   return val;
  // };
  const dataArr = props.array;

  const [values, setValues] = useState({
    name: "",
    isLogin: false,
    email: "",
    pw: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    pw: false,
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
    if (!values.pw) {
      setError({
        ...error,
        pw: true,
      });
    }

    if (!values.name || !values.email || !values.pw) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      console.log("welcome");
      localStorage.setItem("signIn", JSON.stringify([...dataArr, values]));

      navigate("/login");
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
            SignUp
          </h1>
          <form onSubmit={handleSubmit}>
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
              className="border block mb-2 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              className="border block mb-8 pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
              placeholder="password"
              name="pw"
              value={values.pw}
              onChange={handleChange}
            />
            {/* <NavLink to=""> */}
            <Button type="submit" className="w-full px-15 mb-2">
              Register
            </Button>
            {/* </NavLink> */}
          </form>
          <NavLink to="/login">
            <Button className="w-full mb-2">Login</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
