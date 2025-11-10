import Student from "./Pages/studentListing/Index";
import AddStudent from "./Pages/addStudent/AddStudent";
import { Route, Routes } from "react-router";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Student />} />
      <Route path="/add" element={<AddStudent />} />
    </Routes>
  );
};

export default Router;
