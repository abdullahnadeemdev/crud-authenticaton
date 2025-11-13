import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";
import { useState } from "react";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";

const getItem = () => {
  let val = [];
  const arr = localStorage.getItem("signIn");
  if (arr) {
    val = JSON.parse(arr);
  }
  return val;
};

const dataArr = getItem();
const findUser = dataArr.find((item) => {
  if (item.isLogin === true) {
    return true;
  } else {
    false;
  }
});

// console.log("aaaaaaaaaaaaaaaaaa", newArr);

const isAuth = findUser || "";
// console.log("router array", newArr);
// console.log("router new array", isAuth);
const Router = () => {
  // const [isAuth, setIsAuth] = useState(false);
  // const authenticate = () => {
  //   const newArr = dataArr.find((item) => {
  //     if (item.isLogin === true) {
  //       return true;
  //     } else {
  //       false;
  //     }
  //   });

  //   newArr ? setIsAuth(true) : setIsAuth(false);
  // };

  // console.log("authenticate authenticate", authenticate());
  return (
    <Routes>
      <Route path="/login" element={<Login auth={isAuth} array={dataArr} />} />
      <Route path="/sign-up" element={<SignUp array={dataArr} />} />
      {isAuth ? (
        <>
          <Route
            path="/student-list"
            element={
              <Layout>
                <Student />
              </Layout>
            }
          />
          <Route
            path="/add"
            element={
              <Layout>
                <AddStudent />
              </Layout>
            }
          />
          <Route
            path="/update"
            element={
              <Layout>
                <Update />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <Student />
              </Layout>
            }
          />
        </>
      ) : (
        ""
      )}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
// export { isAuth };
export default Router;
