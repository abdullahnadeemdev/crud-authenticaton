import { useState } from "react";
import Button from "../../components/shared/button/Button";

const UserProfile = () => {
  const fetchData = () => {
    let arr = JSON.parse(localStorage.getItem("signIn"));
    return arr || [];
  };

  //   console.log("urllllll", location.pathname);

  const dataArr = fetchData();

  const getUser = dataArr?.filter((item) => item.isLogin);

  const [info, setInfo] = useState({
    name: getUser[0].name,
    email: getUser[0].email,
    pw: getUser[0].pw,
  });

  const [isEdit, setIsEdit] = useState(false);
  //   const user = getUser;
  //   console.log("dataArr", getUser[0].name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Nameeeeeeee", name, "   value", value);
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = dataArr.map((item) => {
      if (item.isLogin) {
        return (item = info);
      } else {
        return item;
      }
    });
    // console.log("newData newData newData", newData);
    localStorage.setItem("signIn", JSON.stringify(newData));
    setIsEdit(!isEdit);
  };

  const handleEdit = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    setIsEdit(!isEdit);
    console.log("isEdit", isEdit);
  };

  return (
    <div className="w-full p-10 max-w-100 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg  mx-auto">
      <div className="text-center w-full  ">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
          Welcome {info.name}
        </h1>
        <form className="mt-6 w-fit mx-auto " id="userForm">
          <div className="text-start ">
            <p htmlFor="name">Username</p>
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
              id="name"
              className="border block mx-auto rounded-lg border-chineseViolet p-1 "
              disabled={!isEdit}
            />
            {console.log(isEdit)}
          </div>
          <div className="text-start">
            <p htmlFor="email">Email</p>
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
              id="email"
              className="border block mx-auto rounded-lg border-chineseViolet p-1"
              disabled={!isEdit}
            />
          </div>
          <div className="text-start mb-6">
            <p htmlFor="password">Password</p>
            <input
              value={info.pw}
              type="text"
              onChange={handleChange}
              name="pw"
              id="password"
              className="border block mx-auto rounded-lg border-chineseViolet p-1"
              disabled={!isEdit}
            />
          </div>
        </form>
        {isEdit ? (
          <Button onClick={handleSubmit} form="userForm" type="submit">
            Update
          </Button>
        ) : (
          <Button onClick={handleEdit}>Edit</Button>
        )}
        {/* <Button className="ml-2">Logout</Button> */}
      </div>
    </div>
  );
};

export default UserProfile;
