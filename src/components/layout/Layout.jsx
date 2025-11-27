// import Navbar from "../shared/navbar/Nav bar";
import Navbar from "../../container/NavbarContainer";
// import Cake from './'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <main>{children} </main>
      </div>
    </div>
  );
};

export default Layout;
