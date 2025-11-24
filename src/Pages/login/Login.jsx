import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useEffect, useState } from "react";

const Login = (props) => {
  const navigate = useNavigate();
  const getItem = () => {
    const arr = JSON.parse(localStorage.getItem("signIn"));

    return arr;
  };

  const dataArr = getItem();
  const [values, setValues] = useState({
    email: "",
    pw: "",
  });
  const [error, setError] = useState({
    email: "",
    pw: "",
  });

  const validation = () => {
    if (!values.email) {
      setError((prev) => ({
        ...prev,
        email: "Email is empty",
      }));
    }

    if (!values.pw) {
      setError((prev) => ({
        ...prev,
        pw: "Password is empty",
      }));
    }

    if (!values.email || !values.pw) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      const user = dataArr.find((item) => {
        if (item.email === values.email) {
          return true;
        } else {
          return false;
        }
      });
      if (user) {
        if (user.pw === values.pw) {
          user.isLogin = true;
          localStorage.setItem("logIn", JSON.stringify(user));
          // const newDataArr = dataArr.map((item) => {
          //   if (item.email === user.email) {
          //     item = user;
          //     return item;
          //   } else {
          //     return item;
          //   }
          // });
          // localStorage.setItem("signIn", JSON.stringify(newDataArr));
          let authVar = props?.auth;
          authVar = true;
          props?.auth ? navigate("/student-list") : navigate("/pageNotFound");
          window.location.reload(false);
        } else {
          setError({
            ...error,
            pw: "Wrong user password",
          });
        }
      } else {
        setError({
          ...error,
          email: "Wrong email",
        });
      }
    } else {
      console.log("error", error);
      console.log("ingo", values);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="w-full flex items-center h-screen">
      <div className=" sm:max-w-[500px] m-4 border border-chineseViolet p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
            Login
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="email"
                className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
                  error.email ? "border-redBorder" : "border-chineseViolet"
                }`}
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {error?.email && (
                <p className="text-redBorder text-start">{error.email}</p>
              )}
            </div>
            <div className="mb-1">
              <input
                type="password"
                className={`border block pl-1 indent-2 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
                  error.pw ? "border-redBorder" : "border-chineseViolet"
                }`}
                placeholder="Password"
                name="pw"
                value={values.pw}
                onChange={handleChange}
              />
              {error?.pw && (
                <p className="text-redBorder text-start ">{error.pw}</p>
              )}
            </div>

            <a
              href="/forgot-password"
              className="hover:underline hover:text-blue-500"
            >
              <p className="text-start text-sm">Forgot password?</p>
            </a>
            <Button className="w-full mb-2 mt-8" type="submit">
              Log In
            </Button>
          </form>

          <NavLink to="/sign-up">
            <Button className="w-full mb-2">Sign Up</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
