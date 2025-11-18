import React, { useState } from "react";
import Listing from "../../components/studentList/Listing";

const Index = () => {
  const [modal, setModal] = useState({
    display: false,
    row: "",
  });

  return (
    <div>
      <Listing state={modal} setState={setModal} />
    </div>
  );
};

export default Index;
