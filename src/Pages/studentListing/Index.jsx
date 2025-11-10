import React from "react";
import Listing from "../../components/studentList/Listing";

const Index = (props) => {
  console.log(props);
  return (
    <div>
      <Listing dataArr={props} />
    </div>
  );
};

export default Index;
