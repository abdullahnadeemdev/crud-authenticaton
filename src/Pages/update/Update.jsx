import { useState } from "react";
import Button from "../../components/shared/button/Button";
import { useLocation, useNavigate } from "react-router";

const Update = () => {
  const dataArr = JSON.parse(localStorage.getItem("info"));
  // const dataArr = JSON.parse(arr);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [studentInfo, setStudentInfo] = useState({
    id: state.id,
    studentName: state.studentName,
    studentEmail: state.studentEmail,
    studentAge: state.studentAge,
    studentClass: state.studentClass,
    studentPhone: state.studentPhone,
    studentGender: state.studentGender,
    studentEducation: state.studentEducation,
  });

  const [error, setError] = useState([
    {
      studentName: "",
      studentEmail: "",
      studentAge: "",
      studentClass: "",
      studentPhone: "",
      studentGender: "",
      studentEducation: "",
    },
  ]);

  const validation = () => {
    let errors = {
      name: "",
      email: "",
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

    const user = dataArr.filter(
      (item) => item.studentEmail === studentInfo.studentEmail
    );
    console.log("i am user", user);
    console.log("i am user.length", user.length);
    if (user.length > 1) {
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
    if (!studentInfo.studentGender) {
      setError((prev) => ({
        ...prev,
        studentGender: "Select a gender",
      }));
    }
    if (!studentInfo.studentEducation) {
      setError((prev) => ({
        ...prev,
        studentEducation: "Select an education",
      }));
    }

    if (
      !studentInfo.studentName ||
      !studentInfo.studentEmail ||
      !studentInfo.studentPhone ||
      !studentInfo.studentAge ||
      !studentInfo.studentClass ||
      !studentInfo.studentGender ||
      !studentInfo.studentEducation ||
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
      console.log("changes updated", studentInfo);
      console.log("changes updated", state.admin);

      const newData = dataArr.map((item) => {
        if (item.id === state.id) {
          item = { ...studentInfo, admin: state.admin };
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

          <div className="mx-auto w-fit max-w-40 sm:max-w-[180px] xl:max-w-[200px]">
            <h3 className="text-chineseViolet py-0.5 md:py-2 font-semibold xxs:text-xs sm:text-sm md:text-lg xl:text-xl">
              Gender
            </h3>
            <input
              type="radio"
              name="studentGender"
              id="genderM"
              value="male"
              checked={studentInfo.studentGender === "male"}
              onChange={handleChange}
            />
            <label
              htmlFor="genderM"
              className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              Male
            </label>
            <input
              type="radio"
              name="studentGender"
              id="genderF"
              value="female"
              className="ml-13"
              onChange={handleChange}
              checked={studentInfo.studentGender === "female"}
            />
            <label
              htmlFor="genderF"
              className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              Female
            </label>

            <input
              type="radio"
              name="studentGender"
              id="genderO"
              value="other"
              className="mt-3"
              checked={studentInfo.studentGender === "other"}
              onChange={handleChange}
            />
            <label
              htmlFor="genderO"
              className=" py-1 pl-2  font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              Other
            </label>
            {error?.studentGender && (
              <p className="text-redBorder text-start">{error.studentGender}</p>
            )}
          </div>

          <div className="mx-auto mt-3 mb-4 md:mb-8 overflow-wrap w-fit max-w-40 sm:max-w-[180px] xl:max-w-[200px]">
            <h3 className=" text-chineseViolet py-0.5 md:py-2 font-semibold xxs:text-xs sm:text-sm md:text-lg xl:text-xl">
              Education
            </h3>
            <input
              type="radio"
              id="school"
              checked={studentInfo.studentEducation === "school"}
              value="school"
              name="studentEducation"
              onChange={handleChange}
            />
            <label
              htmlFor="school"
              className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              School
            </label>

            <input
              type="radio"
              className="ml-10"
              id="college"
              name="studentEducation"
              checked={studentInfo.studentEducation === "college"}
              value="college"
              onChange={handleChange}
            />
            <label
              htmlFor="college"
              className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              College
            </label>

            <input
              type="radio"
              value="bachelor"
              id="bachelor"
              className="mt-3"
              name="studentEducation"
              checked={studentInfo.studentEducation === "bachelor"}
              onChange={handleChange}
            />
            <label
              htmlFor="bachelor"
              className=" py-1 pl-2 font-semibold xxs:text-xs sm:text-sm md:text-base xl:text-lg"
            >
              Bachelor
            </label>
            {error?.studentEducation && (
              <p className="text-redBorder text-start">
                {error.studentEducation}
              </p>
            )}
          </div>
        </form>

        <Button form="myForm" type="submit">
          Update
        </Button>
      </div>
    </div>
  );
};
export default Update;
