import TbRow from "./TbRow";
import { headArr } from "../../utils/mockUpData";
import Delete from "./Delete";

const Listing = (props) => {
  const getEmail = () => {
    let arr = [];
    // arr = JSON.parse(localStorage.getItem("signIn"));
    arr = JSON.parse(sessionStorage.getItem("login"));
    // const adminEmail = arr.find((ele) => ele.isLogin !== false);
    const adminEmail = arr[0];
    return adminEmail.email;
  };
  const admin = getEmail();
  console.log(admin);

  const getItems = () => {
    const arr = JSON.parse(localStorage.getItem("info")) || [];
    console.log("i am array ", arr);
    const data = arr.filter((ele) => ele.admin === admin);
    return data;
  };
  const dataArr = getItems();

  return (
    <div className="mx-auto flex justify-center max-w-[1320px] relative">
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
          {dataArr?.map((item, index) => (
            <TbRow list={props} item={item} key={index} />
          ))}
        </tbody>
      </table>
      {props.state.display ? (
        <div className="absolute top-[60%]">
          <Delete list={props} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Listing;
