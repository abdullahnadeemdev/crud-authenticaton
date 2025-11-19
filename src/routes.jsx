import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Navigate, Route, Routes } from "react-router";
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

const isAuth = findUser || false;

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
          <Route path="*" element={<Navigate to="/student-list" replace />} />
        </>
      ) : (
        <>
          <Route
            path="/login"
            element={<Login auth={isAuth} array={dataArr} />}
          />
          <Route path="/sign-up" element={<SignUp array={dataArr} />} />
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
