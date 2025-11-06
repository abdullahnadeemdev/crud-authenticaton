import Layout from "./components/layout/Layout";
import AddStudent from "./Pages/addStudent/AddStudent";
import Login from "./Pages/login/Login";
import StudentList from "./Pages/studentListing";

function App() {
  return (
    <>
      <Layout>
        {/* <StudentList /> */}
        {/* <AddStudent /> */}
        <Login />
      </Layout>
    </>
  );
}

export default App;
