import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
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
    </Routes>
  );
};

export default Router;
