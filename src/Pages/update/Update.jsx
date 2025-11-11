import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { NavLink } from "react-router";

const Update = (props) => {
  const dataArr = props?.listing;
  // console.log("new student", props);
  console.log("data Arr", dataArr);
  const [studentInfo, setStudentInfo] = useState({
    roll: "",
    studentName: "",
    emailS: "",
    ageS: "",
    studentClass: "",
    phoneS: "",
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
      !studentInfo.studentName ||
      !studentInfo.emailS ||
      !studentInfo.phoneS ||
      !studentInfo.ageS ||
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
      console.log("form submitted");
      props.setListing([...dataArr, studentInfo]);
      // console.log("props", props);
    } else {
      console.log("error submitting form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let num = Math.floor(Math.random() * 100);
    setStudentInfo({
      ...studentInfo,
      [name]: value,
      roll: num,
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
          Add
        </Button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};
export default Update;
