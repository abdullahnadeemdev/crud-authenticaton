import React from "react";
import Listing from "../../components/studentList/Listing";

const Index = (props) => {
  // console.log("direct prop", props);
  return (
    <div>
      <Listing data={props} />
    </div>
  );
};

export default Index;
