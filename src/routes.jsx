import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import Update from "./Pages/update/Update";

let flagCheck = true;
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      {flagCheck ? (
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
        </>
      ) : (
        ""
      )}
    </Routes>
  );
};
export { flagCheck };
export default Router;
