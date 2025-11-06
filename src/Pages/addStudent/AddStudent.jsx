import Button from "../../components/shared/button/Button";

const AddStudent = () => {
  return (
    <div className="mx-auto p-2 sm:p-6 md:p-10 mt-10 border-2 border-chineseViolet rounded-lg w-fit max-w-[600px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-8 xl:mb-10 text-chineseViolet font-semibold text-xl sm:text-2xl xl:text-4xl">
          Add New Student
        </h1>
        <div className="mx-auto sm:w-[500px] mb-2 md:mb-5">
          <input
            type="text"
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Name"
          />
          <input
            type="email"
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Email"
          />
          <input
            type="number"
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Phone"
          />
          <input
            type="text"
            className="border block mx-auto rounded-lg border-chineseViolet p-1 m-2"
            placeholder="Address"
          />
        </div>

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
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default AddStudent;
