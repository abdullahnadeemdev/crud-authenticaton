import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Navigate, Route, Routes, useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
              <Navigate to="/login" />
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
              // <Login auth={isAuth} array={dataArr} />
              <Navigate to="/login" />
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
              <Navigate to="/login" />
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
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            isAuth ? (
              <Navigate to="/pageNotFound" />
            ) : (
              <Login auth={isAuth} array={dataArr} />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            isAuth ? (
              <Navigate to="/pageNotFound" />
            ) : (
              <SignUp array={dataArr} />
            )
          }
        />
        <Route path="/forgot-password" element={isAuth ? "" : <ForgotP />} />
      </>
      <Route path="*" element={<PageNotFound auth={isAuth} />} />
    </Routes>
  );
};
export default Router;
