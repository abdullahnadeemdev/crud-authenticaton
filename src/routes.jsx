import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";
import UserProfile from "./Pages/userProfile/UserProfile";
import ForgotP from "./Pages/forgotP/ForgotP";
import PageNotFound from "./Pages/pageNotFound/PageNotFound";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("logIn"));

  return arr;
};

const dataArr = getItem() || null;

const isAuth = dataArr;

const Router = () => {
  return (
    <Routes>
      <>
        <Route
          path="/student-list"
          element={
            isAuth ? (
              <Layout>
                <Student />
              </Layout>
            ) : (
              <Login auth={isAuth} array={dataArr} />
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
              <Login auth={isAuth} array={dataArr} />
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
              <Login auth={isAuth} array={dataArr} />
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
              <Login auth={isAuth} array={dataArr} />
            )
          }
        />

        <Route
          path="/login"
          element={
            isAuth ? (
              <PageNotFound auth={isAuth} />
            ) : (
              <Login auth={isAuth} array={dataArr} />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            isAuth ? <PageNotFound auth={isAuth} /> : <SignUp array={dataArr} />
          }
        />
        <Route path="/forgot-password" element={isAuth ? "" : <ForgotP />} />
      </>
      <Route path="*" element={<PageNotFound auth={isAuth} />} />
    </Routes>
  );
};
export default Router;
