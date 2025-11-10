import Button from "../shared/button/Button";

const TbRow = ({ item }) => {
  return (
    <tr className=" bg-chineseViolet text-white">
      {item.map((i, ind) => (
        <td
          key={ind}
          className="px-5 text-center xxs:text-xs sm:text-sm md:text-lg xl:text-xl border-r max-w-fit"
        >
          {i}
        </td>
      ))}
      <span>
        <Button>edit</Button>
        <Button>delete</Button>
      </span>
    </tr>
  );
};

export default TbRow;
