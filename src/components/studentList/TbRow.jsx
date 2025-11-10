import Button from "../shared/button/Button";

const TbRow = ({ item }) => {
  return (
    <tr className=" bg-chineseViolet text-white">
      {console.log(item)}
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
        <Button>edit</Button>
        <Button>delete</Button>
      </td>
    </tr>
  );
};

export default TbRow;
