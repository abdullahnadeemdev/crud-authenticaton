import TbRow from "./TbRow";
import { headArr } from "../../utils/mockUpData";
import Delete from "./Delete";

const Listing = (props) => {
  // const getEmail = () => {

  //   const adminEmail = objUser.email || null;
  //   return adminEmail;
  // };
  const objUser = JSON.parse(localStorage.getItem("logIn"));
  const admin = objUser?.email || "";

  const getItems = () => {
    const arr = JSON.parse(localStorage.getItem("info"));
    const data = arr.filter((ele) => ele.admin === admin);
    return data;
  };
  const dataArr = getItems();
  // console.log("dataArrdataArrdataArr", dataArr);

  return (
    <div className="mx-auto flex justify-center max-w-[1320px] relative">
      <div>
        {" "}
        <table className="mt-20 p-4 table-auto">
          <thead>
            <tr>
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
            {dataArr.length > 0 ? (
              dataArr?.map((item, index) => (
                <TbRow list={props} item={item} key={index} />
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        {!dataArr.length > 0 ? (
          <p className="text-xl w-full text-redBorder text-center font-bold">
            The list is empty
          </p>
        ) : (
          ""
        )}
      </div>

      {props.state.display ? (
        <div className="absolute -top-[35%]">
          <Delete list={props} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Listing;
