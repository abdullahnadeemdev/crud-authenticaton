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
import { useAuth } from "./context/authContext";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("logIn"));
  return arr;
};

const dataArr = getItem() || null;

const Router = () => {
  const isAuth = useAuth();
  return (
    <Routes>
      <Route
        path="/student-list"
        element={
          isAuth?.auth ? (
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
          isAuth?.auth ? (
            <Layout>
              <AddStudent />
            </Layout>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/update"
        element={
          isAuth?.auth ? (
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
          isAuth?.auth ? (
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
          isAuth?.auth ? (
            <Navigate to="/student-list" />
          ) : (
            <Login array={dataArr} />
          )
        }
      />
      <Route
        path="/sign-up"
        element={
          isAuth?.auth ? (
            <Navigate to="/pageNotFound" />
          ) : (
            <SignUp array={dataArr} />
          )
        }
      />
      <Route
        path="/forgot-password"
        element={isAuth?.auth ? "" : <ForgotP />}
      />

      <Route path="*" element={<PageNotFound auth={isAuth?.auth} />} />
    </Routes>
  );
};
export default Router;
