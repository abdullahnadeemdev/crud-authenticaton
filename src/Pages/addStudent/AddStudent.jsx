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
    studentGender: "",
    studentEducation: "",
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
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const valueEmail = studentInfo.studentEmail;

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

    if (!valueEmail.match(pattern)) {
      setError((prev) => ({
        ...prev,
        studentEmail: "Invalid email",
      }));
      errors.email = "Invalid email";
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
      console.log("form submitted");
      localStorage.setItem(
        "info",
        JSON.stringify([...dataArr, { ...studentInfo, admin: admin }])
      );
      navigate("/student-list");
    } else {
      console.log("error submitting form", studentInfo);
    }
  };

  // const num = () => {
  //   return dataArr.length === 0 ? 1 : dataArr.length + 1;
  // };

  const id = () => {
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    let id = "";
    let check = false;
    for (let i = 0; id.length < 8; i++) {
      let element = Math.floor(Math.random() * 10);
      if (!check) {
        if (element % 2 !== 0) {
          for (let i = 0; i < 3; i++) {
            element = alphabet[Math.floor(Math.random() * 10)];
            id += element;
            if (i === 2) {
              check = true;
            }
          }
        }
      } else {
        id = id + String(+element);
      }
    }
    console.log("iiiiddddd", id);
    return id;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log("name", name);
    // console.log("value", value);
    setError({
      ...error,
      [name]: "",
    });
    setStudentInfo({
      ...studentInfo,
      [name]: value,
      id: id(),
    });
  };
  return (
    <div className="mx-auto p-2 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg w-full h-fit max-w-fit">
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

        <Button form="myForm" type="submit" className="mx-auto">
          Add
        </Button>
      </div>
    </div>
  );
};
export default AddStudent;
