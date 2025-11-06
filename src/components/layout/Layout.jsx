import Navbar from "../shared/navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
