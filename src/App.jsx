import Layout from "./components/layout/Layout";
import AddStudent from "./Pages/addStudent/AddStudent";
import StudentList from "./components/studentList/Listing";
import { BrowserRouter } from "react-router";
import Router from "./routes";

function App() {
  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
