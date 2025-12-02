import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Navigate, Route, Routes } from "react-router";
import Login from "./container/LoginContainer";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";
import UserProfile from "./Pages/userProfile/UserProfile";
import ForgotP from "./Pages/forgotP/ForgotP";
import PageNotFound from "./Pages/pageNotFound/PageNotFound";
// import { useAuth } from "./context/authContext";

const getItem = () => {
  const arr = JSON.parse(localStorage.getItem("logIn"));
  return arr;
};

const dataArr = getItem() || null;

const Router = (props) => {
  const isAuth = props?.data;
  console.log("props route", isAuth);
  // const isAuth1 = useAuth();
  return (
    <Routes>
      <Route
        path="/student-list"
        element={
          isAuth ? (
            <Layout>
              <Student />
            </Layout>
          ) : (
            <Navigate to="/" />
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
            <Navigate to="/" />
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
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/userProfile"
        element={
          // isAuth?.auth ? (
          isAuth ? (
            <Layout>
              <UserProfile />
            </Layout>
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/sign-up"
        element={
          isAuth ? <Navigate to="/student-list" /> : <SignUp array={dataArr} />
        }
      />
      <Route
        path="/forgot-password"
        element={isAuth ? <Navigate to="/student-list" /> : <ForgotP />}
      />

      <Route
        path="/"
        element={isAuth ? <Navigate to="/student-list" /> : <Login />}
      />
      <Route path="*" element={<PageNotFound auth={isAuth} />} />
    </Routes>
  );
};
export default Router;
