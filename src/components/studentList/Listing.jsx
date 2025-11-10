import TbRow from "./TbRow";

const Listing = () => {
  const headArr = [
    "Roll No.",
    "Student Name",
    "Age",
    "Class",
    "Phone Number",
    "Action",
  ];
  const dataArr = [
    ["1", "Abdullah", "22", "6-A", " 090078601"],
    ["12", "Abdullah", "22", "6-A", " 090078601"],
    ["13", "Abdullah", "22", "6-A", " 090078601"],
    ["41", "Abdullah", "22", "6-A", " 090078601"],
    ["51", "Abdullah", "22", "6-A", " 090078601"],
  ];
  return (
    <div className="mx-auto flex justify-center max-w-[1320px]">
      <table className="mt-20 p-4 table-auto">
        <thead>
          <tr className="uppercase">
            {headArr.map((item, index) => (
              <th
                key={index}
                className="px-5 py-2 text-center bg-yinBlue text-pearl xxs:text-xs sm:text-base md:text-xl xl:text-2xl  max-w-fit "
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataArr.map((item) => (
            <TbRow item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
