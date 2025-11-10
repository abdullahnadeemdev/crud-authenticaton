import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/signUp/SignUp";
import Layout from "./components/layout/Layout";
import { useState } from "react";

const Router = () => {
  //  const dataArr = ;

  const [listing, setListing] = useState([
    {
      roll: 1,
      studentName: "Abdullah",
      emailS: "abdullah@123.com",
      ageS: "22",
      studentClass: "6-A",
      phoneS: "090078601",
    },
    {
      roll: 2,
      studentName: "Abdullah",
      emailS: "abdullah@123.com",
      ageS: "22",
      studentClass: "6-A",
      phoneS: "090078601",
    },
    {
      roll: 3,
      studentName: "Abdullah",
      emailS: "abdullah@123.com",
      ageS: "22",
      studentClass: "6-A",
      phoneS: "090078601",
    },
  ]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route
        path="/student-list"
        element={
          <Layout>
            <Student listing={listing} setListing={setListing} />
          </Layout>
        }
      />
      <Route
        path="/add"
        element={
          <Layout>
            <AddStudent listing={listing} setListing={setListing} />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Router;
