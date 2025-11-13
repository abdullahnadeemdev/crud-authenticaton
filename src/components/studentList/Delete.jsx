import Button from "../shared/button/Button";

const Delete = (props) => {
  const handleCancel = () => {
    console.log("inside delete", props?.list);
    props?.list?.setState({
      display: false,
      row: "",
    });
  };

  const getItem = () => {
    let val = [];
    const arr = localStorage.getItem("info");
    if (arr) {
      val = JSON.parse(arr);
    }
    return val;
  };

  const handleDelete = (e) => {
    // console.log(
    //   "parent of delt",
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.parentElement
    // );
    // console.log("ele2", rowNum);
    const rowNum = props?.list?.state?.row;
    const arr = getItem();
    console.log("delete arrrrrrr", arr);
    const newArr = arr.filter((list) => list.id !== rowNum);
    console.log("delete arrrrrrr", newArr);
    localStorage.setItem("info", JSON.stringify(newArr));
    // const ele2 = props.list.data.listing.filter((list) => list.id !== rowNum);
    // props.list.data.setListing([...ele2]);
    props?.list?.setState({
      display: false,
      row: "",
    });
  };

  return (
    <>
      <div className="bg-gray-200 w-full p-7 border-2 border-yinBlue rounded-2xl">
        <div className="max-w-[400px]">
          <h1 className=" font-bold text-2xl text-chineseViolet">
            Delete Student
          </h1>
          <p className="my-6 font-bold text-yinBlue">
            Are you sure you want to delete this ?
          </p>
          <div className="text-right w-full">
            <Button className="mr-5 lg:p-1.5" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="lg:p-1.5" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delete;
