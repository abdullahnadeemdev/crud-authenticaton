import React, { useState } from "react";
import Listing from "../../components/studentList/Listing";

const Index = (props) => {
  const [modal, setModal] = useState({
    display: false,
    row: "",
  });

  // console.log("direct prop", props);
  return (
    <div>
      <Listing state={modal} setState={setModal} />
    </div>
  );
};

export default Index;
