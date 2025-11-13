import { NavLink, useNavigate } from "react-router";
import Button from "../../components/shared/button/Button";
import { useState } from "react";
import { isAuth } from "../../routes";

const Login = () => {
  // let flag = isAuth;
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
      // return;
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

  // console.log(authUser())

  const authUser = dataArr.find((item) => {
    // console.log("hiiiiiiiiii", item);
    if (item.email === values.email) {
      // console.log("heyyyyyyyyy", item);

      return true;
    } else {
      return false;
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      // console.log("Auth flag", authUser);
      // console.log("data ARRRRRRRRRR", dataArr);
      const user = dataArr.find((item) => {
        // console.log("itemmm", item);
        if (item.email === values.email) {
          return true;
        } else {
          return false;
        }
      });
      // console.log("iiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", user);
      if (user) {
        if (user.pw === values.pw) {
          user.isLogin = true;
          const verify = dataArr.map((item) => {
            if (item.email === user.email) {
              item = user;
              return item;
            } else {
              return item;
            }
          });
          // console.log("item replacement test", verify);
          localStorage.setItem("signIn", JSON.stringify(verify));
          user.isLogin ? navigate("/student-list") : navigate("/");
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
      // if (authUser) {
      //   // isAuth=true;
      //   console.log("working");
      //   isAuth ? navigate("/student-list") : navigate("/");
      // } else {
      //   console.log("Wrong user info");

      // }
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
                <p className="text-redBorder text-start">
                  {error.email}
                  {/* {console.log("i work email", error.email)} */}
                </p>
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
                <p className="text-redBorder text-start ">
                  {error.pw}
                  {/* {console.log("i work password email", error.email)} */}
                </p>
              )}
            </div>
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
