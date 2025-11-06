import Layout from "./components/layout/Layout";
import AddStudent from "./Pages/addStudent/AddStudent";
import StudentList from "./Pages/studentListing";

function App() {
  return (
    <>
      <Layout>
        {/* <StudentList /> */}
        <AddStudent />
      </Layout>
    </>
  );
}

export default App;
