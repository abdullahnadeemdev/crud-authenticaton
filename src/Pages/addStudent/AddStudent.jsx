import Button from "../../components/shared/button/Button";

const AddStudent = () => {
  return (
    <div className="mx-auto mt-10 border text-center max-w-[700px]">
      <h1>Add New Student</h1>
      <div className="text-center mx-auto w-[500px]">
        <input
          type="text"
          className="border block mx-auto rounded-lg border-yinBlue p-1 m-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="border block mx-auto rounded-lg border-yinBlue p-1 m-2"
          placeholder="Email"
        />
        <input
          type="number"
          className="border block mx-auto rounded-lg border-yinBlue p-1 m-2"
          placeholder="Phone"
        />
        <input
          type="text"
          className="border block mx-auto rounded-lg border-yinBlue p-1 m-2"
          placeholder="Address"
        />
      </div>
      <div className="text-center mx-auto w-[500px]">
        <h3>Gender</h3>
        <input type="radio" name="genderM" />
        <label htmlFor="genderM">Male</label>
        <input type="radio" name="genderF" />
        <label htmlFor="genderF">Female</label>
      </div>
      <div className="text-center mx-auto w-[500px]">
        <h3>Education</h3>
        <input type="checkbox" name="school" />
        <label htmlFor="school">School</label>
        <input type="checkbox" name="bachelor" />
        <label htmlFor="bachelor">Bachelor</label>
        <input type="checkbox" name="graduate" />
        <label htmlFor="graduate">Graduate</label>
      </div>
      <Button>Add</Button>
    </div>
  );
};

export default AddStudent;
