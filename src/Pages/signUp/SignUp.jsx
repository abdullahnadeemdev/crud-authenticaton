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
  // const getEmail = () => {
  //   let arr = [];
  //   arr = JSON.parse(localStorage.getItem("signIn"));
  //   const adminEmail = arr.map((item) => {
  //     return item.email;
  //   });
  //   // console.log("i am arrrrrrrrrr", arr, "i am email", adminEmail.email);
  //   return adminEmail;
  // };
  // const admin = getEmail();
  // console.log("admin check", admin);

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
      setError((prev) => ({
        ...prev,
        name: "name is empty",
      }));
    }

    if (!values.email) {
      setError((prev) => ({
        ...prev,
        email: "email is empty",
      }));
    }
    // if (!error.email) {
    //   const checkEmail = admin.find((item) => item === values.email) || "";
    //   if (checkEmail === values.email) {
    //     setError((prev) => ({
    //       ...prev,
    //       email: "email is taken",
    //     }));
    //   }
    // }

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
            SignUp
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className="border block  pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {error?.name && (
                <p className="text-redBorder  text-start">
                  {error.name}
                  {/* {console.log("i work email", error.email)} */}
                </p>
              )}
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="border block  pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {error?.email && (
                <p className="text-redBorder mb-2 text-start">{error.email}</p>
              )}
            </div>
            <div className="mb-8">
              <input
                type="password"
                className="border block  pl-1 mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg"
                placeholder="password"
                name="pw"
                value={values.pw}
                onChange={handleChange}
              />
              {error?.pw && (
                <p className="text-redBorder text-start">
                  {error.pw}
                  {/* {console.log("i work email", error.email)} */}
                </p>
              )}
            </div>
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
