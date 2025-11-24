import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Navigate, Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";
import UserProfile from "./Pages/userProfile/UserProfile";
import ForgotP from "./Pages/forgotP/ForgotP";

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
            path="/userProfile"
            element={
              <Layout>
                <UserProfile />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/student-list" replace />} />
        </>
      ) : (
        <>
          <Route
            path="/login"
            element={<Login auth={isAuth} array={dataArr} />}
          />
          <Route path="/sign-up" element={<SignUp array={dataArr} />} />
          <Route path="/forgot-password" element={<ForgotP />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
      {/* <Route
        path="*"
        element={
          // <div className="h-screen w-screen flex flex-col items-center justify-center text-4xl text-bold text-redBorder">
          //   {"Page Not Found"}
          //   <Button className="mt-10"> Go Back</Button>
          // </div>
        }
      /> */}
    </Routes>
  );
};
export default Router;
