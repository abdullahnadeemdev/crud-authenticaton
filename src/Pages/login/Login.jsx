import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useEffect, useState } from "react";

const Login = (props) => {
  const navigate = useNavigate();
  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("signIn");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
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
        email: "email is empty",
      }));
    }

    if (!values.pw) {
      setError((prev) => ({
        ...prev,
        pw: "password is empty",
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
          const newDataArr = dataArr.map((item) => {
            if (item.email === user.email) {
              item = user;
              return item;
            } else {
              return item;
            }
          });
          localStorage.setItem("signIn", JSON.stringify(newDataArr));
          let authVar = props?.auth;
          authVar = true;
          authVar ? navigate("/student-list") : navigate("/page-not-found");
          window.location.reload(false);
        } else {
          setError({
            ...error,
            pw: "wrong user password",
          });
        }
      } else {
        setError({
          ...error,
          email: "wrong email",
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
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
            Login
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="email"
                className={`border block pl-1  mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
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
            <div className="mb-8">
              <input
                type="password"
                className={`border block pl-1  mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg ${
                  error.pw ? "border-redBorder" : "border-chineseViolet"
                }`}
                placeholder="password"
                name="pw"
                value={values.pw}
                onChange={handleChange}
              />
              {error?.pw && (
                <p className="text-redBorder text-start ">{error.pw}</p>
              )}
            </div>
            <Button className="w-full mb-2" type="submit">
              Sign In
            </Button>
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
