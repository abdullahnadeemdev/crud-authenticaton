import TbRow from "./TbRow";
import { headArr } from "../../utils/mockUpData";
import Delete from "./Delete";

const Listing = (props) => {
  // const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);
  // const dataArr = props?.data?.listing;
  const getItems = () => {
    let val = [];
    const arr = localStorage.getItem("info") || "";
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };
  // console.log("hyeyyyyyyyy", props?.arrayProp?.array);
  const dataArr = getItems();
  // useEffect(() => {
  //   setLoggedIn(true);
  // }, []);

  // if (loggedIn) {
  //   return navigate("/student-list");
  // }

  // console.log("hello1", arr);
  // console.log("hello2", dataArr);
  // console.log("hello3", props.data.listing);
  return (
    <div className="mx-auto flex justify-center max-w-[1320px] relative">
      <table className="mt-20 p-4 table-auto">
        <thead>
          <tr className="uppercase">
            {/* {console.log("data in listing", dataArr)} */}
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
