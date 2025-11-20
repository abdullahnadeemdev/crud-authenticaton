import Button from "../../components/shared/button/Button";
import { useState } from "react";
import PetName from "../../components/forgotP/PetName";
import Email from "../../components/forgotP/Email";

const ForgotP = () => {
  //   const [values, setValues] = useState({
  //     email: "",
  //   });

  //   const [error, setError] = useState({
  //     email: "",
  //   });

  //   const getItem = () => {
  //     let val = [];
  //     const arr = localStorage.getItem("signIn");
  //     if (arr) {
  //       val = JSON.parse(arr);
  //     }
  //     return val;
  //   };

  //   const dataArr = getItem();

  //   const validation = () => {
  //     if (!values.email) {
  //       setError((prev) => ({
  //         ...prev,
  //         email: "email is empty",
  //       }));
  //     }

  //     if (!values.email) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validation()) {
  //       const checkEmail =
  //         dataArr.find((ele) => ele.email === values.email) || {};
  //       if (checkEmail) {
  //         console.log("I am clicked");
  //         <PetName />;
  //       } else {
  //         console.log("I am notttt  clicked");
  //         setError((prev) => ({
  //           ...prev,
  //           email: "No email found",
  //         }));
  //       }
  //     }
  //   };
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     // console.log("name", name);
  //     // console.log("value", value);
  //     setError((prev) => ({
  //       ...prev,
  //       email: "",
  //     }));
  //     setValues((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };
  const [next, setNext] = useState({
    show: false,
    data: "",
  });

  return (
    <div>
      {next.show ? (
        <PetName next={next} setNext={setNext} />
      ) : (
        <Email next={next} setNext={setNext} />
      )}
    </div>
  );
};

export default ForgotP;
