import React from "react";

const Index = () => {
  const headArr = ["Roll No.", "Student Name", "Age", "Class", "Phone Number"];
  const dataArr = ["1", "Abdullah", "22", "6-A", " 090078601"];
  return (
    <div className="mx-auto flex justify-center max-w-[1320px]">
      <table className="bg-blue-200 mt-20 p-4 table-auto">
        <thead>
          <tr className="bg-green-200 border uppercase">
            {headArr.map((item, index) => (
              <th
                key={index}
                className="px-5 text-center bg-red-200 xxs:text-xs sm:text-base md:text-xl xl:text-2xl border-r max-w-fit "
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            {dataArr.map((item, index) => (
              <td
                key={index}
                className="px-5 text-center bg-yellow-200 xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit"
              >
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;

{
  /* <div>
    <ul className="flex items-center justify-center mt-10">
      <li className="px-2 font-bold bg-green-300 text-3xl">Roll no.</li>
      <li className="px-2 font-bold bg-green-300 text-3xl">Student Name</li>
      <li className="px-2 font-bold bg-green-300 text-3xl">Age</li>
      <li className="px-2 font-bold bg-green-300 text-3xl">Class</li>
      <li className="px-2 font-bold bg-green-300 text-3xl">Phone</li>
      <li className="px-2 font-bold bg-green-300 text-3xl">
        <button>edit</button>
        <button>delete</button>
      </li>
    </ul>
  </div>
  <div></div> */
}
