import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Navigate, Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";
import UserProfile from "./Pages/userProfile/UserProfile";
import ForgotP from "./Pages/forgotP/ForgotP";
import PageNotFound from "./Pages/pageNotFound/PageNotFound";

const getItem = () => {
  let val = [];
  const arr = JSON.parse(localStorage.getItem("logIn"));

  return arr;
};
console.log("getItem()", getItem());

const dataArr = getItem() || null;
// const findUser = dataArr.find((item) => {
//   if (item.isLogin === true) {
//     return true;
//   } else {
//     false;
//   }
// });
console.log(dataArr);
const isAuth = dataArr;

const Router = () => {
  return (
    <Routes>
      {/* {isAuth ? ( */}
      <>
        <Route
          path="/student-list"
          element={
            isAuth ? (
              <Layout>
                <Student />
              </Layout>
            ) : (
              ""
            )
          }
        />
        <Route
          path="/add"
          element={
            isAuth ? (
              <Layout>
                <AddStudent />
              </Layout>
            ) : (
              ""
            )
          }
        />
        <Route
          path="/update"
          element={
            isAuth ? (
              <Layout>
                <Update />
              </Layout>
            ) : (
              ""
            )
          }
        />
        <Route
          path="/userProfile"
          element={
            isAuth ? (
              <Layout>
                <UserProfile />
              </Layout>
            ) : (
              ""
            )
          }
        />
        {/* <Route path="*" element={<PageNotFound auth={isAuth} />} /> */}

        {/* ) : ( */}

        <Route
          path="/login"
          element={isAuth ? "" : <Login auth={isAuth} array={dataArr} />}
        />
        <Route
          path="/sign-up"
          element={isAuth ? "" : <SignUp array={dataArr} />}
        />
        <Route path="/forgot-password" element={isAuth ? "" : <ForgotP />} />
      </>
      {/* )} */}
      <Route path="*" element={<PageNotFound auth={isAuth} />} />
    </Routes>
  );
};
export default Router;
