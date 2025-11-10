import Layout from "./components/layout/Layout";
import AddStudent from "./Pages/addStudent/AddStudent";
import StudentList from "./components/studentList/Listing";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Layout>
        {/* <StudentList /> */}
        <AddStudent />
      </Layout>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
