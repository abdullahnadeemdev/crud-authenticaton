import { NavLink } from "react-router";
import { Delete, Edit } from "../../assets/icons";
import Button from "../shared/button/Button";

const TbRow = ({ item, list }) => {
  const handleClick = () => {
    list.setState({
      display: true,
      row: item.id,
    });
  };
  return (
    <>
      <tr key={item.id} className=" bg-chineseViolet text-white">
        <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
          {item.studentName}
        </td>
        <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
          {item.studentEmail}
        </td>
        <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
          {item.studentAge}
        </td>
        <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
          {item.studentClass}
        </td>
        <td className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit">
          {item.studentPhone}
        </td>
        <td>
          <NavLink
            to="/update"
            state={{
              id: item.id,
              studentName: item.studentName,
              studentAge: item.studentAge,
              studentClass: item.studentClass,
              studentPhone: item.studentPhone,
              studentEmail: item.studentEmail,
              studentGender: item.studentGender,
              studentEducation: item.studentEducation,
              admin: item.admin,
            }}
          >
            <Button>
              <span className="flex gap-1 items-center">
                <Edit />
                <p>Edit</p>
              </span>
            </Button>
          </NavLink>
          <Button onClick={handleClick}>
            <span className="flex gap-1 items-center">
              <Delete />
              <p>Delete</p>
            </span>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TbRow;
