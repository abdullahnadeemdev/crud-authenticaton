import { Link, NavLink } from "react-router";
import Button from "../shared/button/Button";

const TbRow = ({ item, list }) => {
  const handleClick = () => {
    const ele2 = list.data.listing.filter((list) => list.id !== item.id);
    console.log("ele2", ele2);
    list.data.setListing([...ele2]);
  };

  return (
    <tr key={item.roll} className=" bg-chineseViolet text-white">
      {/* <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.roll}
      </td> */}
      <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.studentName}
      </td>
      <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.emailS}
      </td>
      <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.ageS}
      </td>
      <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.studentClass}
      </td>
      <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
        {item.phoneS}
      </td>
      <td>
        <NavLink
          to="/update"
          state={{
            id: item.id,
            studentName: item.studentName,
            ageS: item.ageS,
            studentClass: item.studentClass,
            phoneS: item.phoneS,
            emailS: item.emailS,
          }}
        >
          <Button>edit</Button>
        </NavLink>
        <Button onClick={handleClick}>delete</Button>
      </td>
    </tr>
  );
};

export default TbRow;
