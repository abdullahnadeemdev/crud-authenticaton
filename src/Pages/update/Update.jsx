import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { NavLink, useLocation, useNavigate } from "react-router";

const Update = () => {
  const arr = localStorage.getItem("info");
  const dataArr = JSON.parse(arr);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [studentInfo, setStudentInfo] = useState({
    id: state.id,
    studentName: state.studentName,
    studentEmail: state.studentEmail,
    studentAge: state.studentAge,
    studentClass: state.studentClass,
    studentPhone: state.studentPhone,
  });

  const [error, setError] = useState([
    {
      studentName: false,
      studentEmail: false,
      studentAge: false,
      studentClass: false,
      studentPhone: false,
    },
  ]);

  const validation = () => {
    if (!studentInfo.studentName) {
      setError((prev) => ({
        ...prev,
        studentName: "Name is empty",
      }));
    }

    if (!studentInfo.studentEmail) {
      setError((prev) => ({
        ...prev,
        studentEmail: "Email is empty",
      }));
    }
    if (!studentInfo.studentPhone) {
      setError((prev) => ({
        ...prev,
        studentPhone: "Phone number is empty",
      }));
    }
    if (!studentInfo.studentAge) {
      setError((prev) => ({
        ...prev,
        studentAge: "Age is empty",
      }));
    }

    if (!studentInfo.studentClass) {
      setError((prev) => ({
        ...prev,
        studentClass: "Class is empty",
      }));
    }

    if (
      !studentInfo.studentName ||
      !studentInfo.studentEmail ||
      !studentInfo.studentPhone ||
      !studentInfo.studentAge ||
      !studentInfo.studentClass
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      console.log("changes updated", studentInfo);
      console.log("changes updated", state.adminS);

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
    } else {
      console.log("error submitting form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };
  return (
    <div className="mx-auto p-2 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg w-fit max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
          Update Student
        </h1>
        <form
          className="mx-auto sm:w-[500px] mb-2 md:mb-5"
          onSubmit={handleSubmit}
          id="myForm"
        >
          <div className="w-fit mx-auto m-2">
            <input
              type="text"
              onChange={handleChange}
              value={studentInfo.studentName}
              className="border block mx-auto rounded-lg border-chineseViolet p-1"
              placeholder="Name"
              name="studentName"
            />
            {error?.studentName && (
              <p className="text-redBorder text-start">{error.studentName}</p>
            )}
          </div>

          <div className="w-fit mx-auto m-2">
            <input
              type="email"
              onChange={handleChange}
              className="border block mx-auto rounded-lg border-chineseViolet p-1"
              placeholder="Email"
              value={studentInfo.studentEmail}
              name="studentEmail"
            />
            {error?.studentEmail && (
              <p className="text-redBorder text-start">{error.studentEmail}</p>
            )}
          </div>
          <div className="w-fit mx-auto m-2">
            <input
              type="number"
              onChange={handleChange}
              className="border block mx-auto rounded-lg border-chineseViolet p-1 "
              placeholder="Phone"
              value={studentInfo.studentPhone}
              name="studentPhone"
            />
            {error?.studentPhone && (
              <p className="text-redBorder text-start">{error.studentPhone}</p>
            )}
          </div>
          <div className="w-fit mx-auto m-2">
            <input
              type="number"
              onChange={handleChange}
              className="border block mx-auto rounded-lg border-chineseViolet p-1 "
              placeholder="Age"
              value={studentInfo.studentAge}
              name="studentAge"
            />
            {error?.studentAge && (
              <p className="text-redBorder text-start">{error.studentAge}</p>
            )}
          </div>
          <div className="w-fit mx-auto m-2">
            <input
              type="text"
              onChange={handleChange}
              className="border block mx-auto rounded-lg border-chineseViolet p-1 "
              placeholder="Class"
              value={studentInfo.studentClass}
              name="studentClass"
            />
            {error?.studentClass && (
              <p className="text-redBorder text-start">{error.studentClass}</p>
            )}
          </div>
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
        <Button form="myForm" type="submit">
          Add
        </Button>
      </div>
    </div>
  );
};
export default Update;
