import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { NavLink } from "react-router";

const UserProfile = () => {
  const fetchData = () => {
    let arr = JSON.parse(localStorage.getItem("signIn"));
    return arr || [];
  };

  //   console.log("urllllll", location.pathname);

  const dataArr = fetchData();

  const getUser = dataArr?.find((item) => item.isLogin);

  const [values, setValues] = useState({
    name: getUser?.name,
    email: getUser?.email,
    pw: getUser?.pw,
    isLogin: getUser?.isLogin,
  });

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState([
    {
      name: "",
      email: "",
      pw: "",
    },
  ]);

  const validation = () => {
    let errors = {
      name: "",
      email: "",
      pw: "",
    };
    // ^[a-zA-Z0-9_.±]+@+[a-zA-Z0-9-]+.+[a-zA-Z0-9-.]+$
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const pwSyntax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!values.name) {
      setError((prev) => ({
        ...prev,
        name: "Name is empty",
      }));
      errors.name = "Name is empty";
    }

    if (!values.email) {
      setError((prev) => ({
        ...prev,
        email: "Email is empty",
      }));
      errors.email = "Email is empty";
    }

    const valueEmail = values.email;
    const valuePassword = values.pw;

    if (!valueEmail.match(pattern)) {
      setError((prev) => ({
        ...prev,
        email: "Invalid email",
      }));
      errors.email = "Invalid email";
    }

    // const user = dataArr.find((item) => item.email === values.email) || "";
    // console.log(
    //   "i am user",
    //   user.id,
    //   "    i am userProfile id: ",
    //   values.id,
    //   "dataArrdataArrdataArr",
    //   dataArr
    // );
    // if (user.id !== values.id) {
    //   setError((prev) => ({
    //     ...prev,
    //     studentEmail: "Email already taken",
    //   }));
    //   errors.email = "Email is taken";
    // }

    if (!values.pw) {
      setError((prev) => ({
        ...prev,
        pw: "Password is empty",
      }));
      errors.pw = "Password is empty";
    }

    if (!valuePassword.match(pwSyntax)) {
      setError((prev) => ({
        ...prev,
        pw: "Weak password",
      }));
      errors.pw = "Weak password";
    }

    if (
      errors.name ||
      errors.email ||
      errors.pw ||
      !values.name ||
      !values.email ||
      !values.pw
    ) {
      return false;
    } else {
      return true;
    }
  };
  //   const user = getUser;
  //   console.log("getUser", getUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("Nameeeeeeee", name, "   value", value);
    setError({
      ...error,
      [name]: "",
    });
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      const newData = dataArr.map((item) => {
        if (item.isLogin) {
          return (item = values);
        } else {
          return item;
        }
      });
      localStorage.setItem("signIn", JSON.stringify(newData));
      setIsEdit(!isEdit);
    } else {
      console.log("error submitting form", values);
    }
    // console.log("newData newData newData", newData);
  };

  const handleEdit = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsEdit(!isEdit);
    // console.log("isEdit", isEdit);
  };

  return (
    <div className="w-full p-10 max-w-100 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg  mx-auto">
      <div className="text-center w-full  ">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
          Welcome {values.name}
        </h1>
        <form className="mt-6 w-fit mx-auto " id="userForm">
          <div className="text-start ">
            <p htmlFor="name">Username</p>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              className={`border block mx-auto rounded-lg border-chineseViolet p-1 ${
                isEdit ? "" : "opacity-60"
              }`}
              disabled={!isEdit}
            />
            {error?.name && (
              <p className="text-redBorder text-start">{error.name}</p>
            )}
            {/* {console.log(isEdit)} */}
          </div>
          <div className="text-start">
            <p htmlFor="email">Email</p>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              className={`border block mx-auto rounded-lg border-chineseViolet p-1 ${
                isEdit ? "" : "opacity-60"
              }`}
              disabled={!isEdit}
            />
            {error?.email && (
              <p className="text-redBorder text-start">{error.email}</p>
            )}
          </div>
          <div className="text-start mb-6">
            <p htmlFor="password">Password</p>
            <input
              value={values.pw}
              type="text"
              onChange={handleChange}
              name="pw"
              id="password"
              className={`border block mx-auto rounded-lg border-chineseViolet p-1 ${
                isEdit ? "" : "opacity-60"
              }`}
              disabled={!isEdit}
            />
            {error?.pw && (
              <p className="text-redBorder text-start">{error.pw}</p>
            )}
          </div>

          <div className="flex justify-between">
            {isEdit ? (
              <Button onClick={handleSubmit} type="submit">
                Update
              </Button>
            ) : (
              <Button onClick={handleEdit}>Edit</Button>
            )}
            <NavLink to="/student-list">
              <Button className="ml-2">Home</Button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
