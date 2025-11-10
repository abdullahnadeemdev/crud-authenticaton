import TbRow from "./TbRow";
import { headArr } from "../../utils/mockUpData";
// import { dataArr } from "../../utils/mockUpData";

const Listing = (props) => {
  const dataArr = props?.dataArr?.listing;
  console.log("hello", props.dataArr.listing);
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
          {dataArr.map((item, index) => (
            <TbRow item={item} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
