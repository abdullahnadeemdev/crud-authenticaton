import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { NavLink, useLocation, useNavigate } from "react-router";

const Update = () => {
  const arr = localStorage.getItem("info");
  const dataArr = JSON.parse(arr);
  const { state } = useLocation();
  const navigate = useNavigate();

  const getEmail = () => {
    let arr = [];
    arr = JSON.parse(localStorage.getItem("signIn"));
    const adminEmail = arr.map((item) => {
      return item.email;
    });
    // console.log("i am email", adminEmail);
    return adminEmail;
  };
  const admin = getEmail();
  console.log("admin check", admin);

  //   const change = dataArr.map((item) => item.sName === state.sName);

  //   console.log("Array", change);
  // console.log("data Arr in update", dataArr);
  const [studentInfo, setStudentInfo] = useState({
    id: state.id,
    studentName: state.studentName,
    emailS: state.emailS,
    ageS: state.ageS,
    studentClass: state.studentClass,
    phoneS: state.phoneS,
  });

  const [error, setError] = useState([
    {
      studentName: false,
      emailS: false,
      ageS: false,
      studentClass: false,
      phoneS: false,
    },
  ]);

  const validation = () => {
    if (!studentInfo.studentName) {
      setError({
        ...error,
        studentName: true,
      });
    }

    if (!studentInfo.emailS) {
      setError({
        ...error,
        emailS: true,
      });
    }

    if (!error.emailS) {
      const checkEmail = admin.filter((item) => {
        studentInfo.emailS === item;
      });
      // console.log("emaillllllllllllllll", checkEmail);
      if (checkEmail) {
        setError((prev) => ({
          ...prev,
          emailS: "email is already taken",
        }));
      }
    }

    if (!studentInfo.phoneS) {
      setError({
        ...error,
        phoneS: true,
      });
    }
    if (!studentInfo.ageS) {
      setError({
        ...error,
        ageS: true,
      });
    }

    if (!studentInfo.studentClass) {
      setError({
        ...error,
        studentClass: true,
      });
    }

    if (
      !error.studentName ||
      !error.emailS ||
      !error.phoneS ||
      !error.ageS ||
      !error.studentClass
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      // console.log("changes updated", studentInfo);
      // console.log("changes updated", state.adminS);

      const newData = dataArr.map((item) => {
        if (item.id === state.id) {
          item = { ...studentInfo, admin: state.adminS };
          return item;
        } else {
          return item;
        }
      });
      console.log("Updated", newData);
      localStorage.setItem("info", JSON.stringify(newData));
      navigate("/student-list");

      //   });
    } else {
      console.log("error submitting form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };
  return (
    <div className="mx-auto p-2 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg w-fit max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
          Update Student
        </h1>
        <form
          className="mx-auto sm:w-[500px] mb-2 md:mb-5"
          onSubmit={handleSubmit}
          id="myForm"
        >
          <input
            type="text"
            onChange={handleChange}
            value={studentInfo.studentName}
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Name"
            name="studentName"
          />
          <input
            type="email"
            onChange={handleChange}
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Email"
            value={studentInfo.emailS}
            name="emailS"
          />
          {error?.emailS && (
            <p className="text-redBorder  text-start">{error.emailS}</p>
          )}
          <input
            type="number"
            onChange={handleChange}
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Phone"
            value={studentInfo.phoneS}
            name="phoneS"
          />
          <input
            type="number"
            onChange={handleChange}
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Age"
            value={studentInfo.ageS}
            name="ageS"
          />
          <input
            type="text"
            onChange={handleChange}
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Class"
            value={studentInfo.studentClass}
            name="studentClass"
          />
        </form>

        <div className="">
          <h3 className="text-chineseViolet py-0.5 md:py-2 font-semibold xxs:text-xs sm:text-sm md:text-lg xl:text-xl">
            Gender
          </h3>
          <input type="radio" name="genderM" className="" />
          <label
            htmlFor="genderM"
            className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
          >
            Male
          </label>
          <input type="radio" name="genderF" className="ml-13" />
          <label
            htmlFor="genderF"
            className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
          >
            Female
          </label>
        </div>

        <div className="sm:ml-4 mt-4 mb-4 md:mb-8 overflow-wrap">
          <h3 className=" text-chineseViolet py-0.5 md:py-2 font-semibold xxs:text-xs sm:text-sm md:text-lg xl:text-xl">
            Education
          </h3>
          <input type="checkbox" name="school" />
          <label
            htmlFor="school"
            className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
          >
            School
          </label>
          <input type="checkbox" name="bachelor" className="ml-10" />
          <label
            htmlFor="bachelor"
            className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
          >
            Bachelor
          </label>
        </div>
        {/* <NavLink to="/student-list"> */}
        <Button form="myForm" type="submit">
          update
        </Button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};
export default Update;
