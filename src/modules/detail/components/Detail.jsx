import React from "react";
import StyleDetail from "./detail.styled";

const Detail = ({ detail }) => {
  return (
    <StyleDetail>
      <div className="header">
        <span>&#8592;</span> <span>Data Peace</span>
      </div>
    </StyleDetail>
  );
};

export default Detail;
