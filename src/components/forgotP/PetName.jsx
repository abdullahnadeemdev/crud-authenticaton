import { useState } from "react";
import Button from "../shared/button/Button";

const PetName = (prop) => {
  //   console.log("email", prop?.next?.data);
  const [password, setPassword] = useState(false);
  const [values, setValues] = useState({
    petName: "",
    pw: "",
  });

  const [error, setError] = useState({
    petName: "",
    pw: "",
  });

  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("signIn");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };

  const dataArr = getItem();

  const validation = () => {
    const pwSyntax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!values.petName) {
      setError((prev) => ({
        ...prev,
        petName: "petName is empty",
      }));
    }

    if (!values.petName) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      const checkPetName = prop?.next?.data.find(
        (ele) => ele.petName === values.petName
      );
      if (checkPetName) {
        console.log("I am clicked", checkPetName);
        setPassword(true);

        // <PetName />;
      } else {
        console.log("I am notttt  clicked");
        setError((prev) => ({
          ...prev,
          petName: "No email found",
        }));
      }
    }
  };

  const handleSubmit2 = () => {
    if (validation()) {
      const checkPetName = dataArr.map((item) => {});
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <div className="w-screen flex items-center h-screen z-20">
      <div className=" sm:max-w-[500px] m-4 border border-chineseViolet p-4 xs:p-6 sm:p-10 md:p-16 mx-auto">
        <div className="text-center w-full p-2 ">
          <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-2xl xl:text-4xl">
            Enter pet name
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                className={`border block pl-1  mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg
                     ${
                       error.email ? "border-redBorder" : "border-chineseViolet"
                     }
                    `}
                placeholder="Pet name"
                name="petName"
                value={values.petName}
                onChange={handleChange}
              />
              {error?.petName && (
                <p className="text-redBorder text-start">{error.petName}</p>
              )}
            </div>
            {password ? (
              <>
                <label>Enter new Password</label>
                <input
                  type="text"
                  className={`border block pl-1  mx-auto rounded-lg border-chineseViolet w-full h-10 text-lg
                     ${error.pw ? "border-redBorder" : "border-chineseViolet"}
                    `}
                  placeholder="password"
                  name="pw"
                  value={values.pw}
                  onChange={handleChange}
                />
                {error?.pw && (
                  <p className="text-redBorder text-start">{error.pw}</p>
                )}
              </>
            ) : (
              //
              ""
            )}

            {password ? (
              <Button className="w-full mb-2  mt-4" onClick={handleSubmit2}>
                Add Password
              </Button>
            ) : (
              <Button className="w-full mb-2  mt-4" type="submit">
                Verify
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetName;
