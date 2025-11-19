import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { useNavigate } from "react-router";

const AddStudent = () => {
  const getEmail = () => {
    let arr = [];
    arr = JSON.parse(localStorage.getItem("signIn"));
    const adminEmail = arr.find((ele) => ele.isLogin !== false);

    return adminEmail.email;
  };

  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("info");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };

  const dataArr = getItem() || [];
  const admin = getEmail();
  const navigate = useNavigate();
  const [studentInfo, setStudentInfo] = useState({
    id: "",
    studentName: "",
    studentEmail: "",
    studentAge: "",
    studentClass: "",
    studentPhone: "",
  });

  const [error, setError] = useState([
    {
      studentName: "",
      studentEmail: "",
      studentAge: "",
      studentClass: "",
      studentPhone: "",
    },
  ]);

  const validation = () => {
    let errors = {
      name: "",
      email: "",
      pw: "",
    };

    if (!studentInfo.studentName) {
      setError((prev) => ({
        ...prev,
        studentName: "Name is empty",
      }));
      errors.name = "Name is empty";
    }

    if (!studentInfo.studentEmail) {
      setError((prev) => ({
        ...prev,
        studentEmail: "Email is empty",
      }));
      errors.email = "Email is empty";
    }

    const user = dataArr.some((item) => {
      if (item.studentEmail === studentInfo.studentEmail) {
        return true;
      } else {
        return false;
      }
    });
    if (user) {
      setError((prev) => ({
        ...prev,
        studentEmail: "Email already taken",
      }));
      errors.email = "Email is taken";
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
      !studentInfo.studentClass ||
      errors.email ||
      errors.name
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validation()) {
      console.log("form submitted");
      localStorage.setItem(
        "info",
        JSON.stringify([...dataArr, { ...studentInfo, admin: admin }])
      );
      navigate("/student-list");
    } else {
      console.log("error submitting form");
    }
  };

  const num = () => {
    return dataArr.length === 0 ? 1 : dataArr.length + 1;
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
      id: studentInfo.studentEmail + num(),
    });
  };
  return (
    <div className="mx-auto p-2 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg w-fit max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
          Add Student
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
export default AddStudent;
