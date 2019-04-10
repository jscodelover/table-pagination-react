import React from "react";
import StyleDetail from "./detail.styled";

const Detail = props => {
  function goBack() {
    props.history.goBack();
  }
  function renderRecord() {
    let displayData = [];
    for (let key in props.detail) {
      if (key !== "id" && key !== "first_name" && key !== "last_name") {
        displayData.push(
          <div className="row">
            <span className="row__key">
              {key === "company_name" ? "company" : key}
            </span>
            <span className="row__value">{props.detail[key]}</span>
          </div>
        );
      }
    }
    return displayData;
  }
  return (
    <StyleDetail>
      <div className="header" onClick={goBack}>
        <span className="backButton">&#8592;</span> <span>Data Peace</span>
      </div>
      <div className="record">
        <h2>
          {props.detail.first_name} {props.detail.last_name}
        </h2>
        {renderRecord()}
      </div>
    </StyleDetail>
  );
};

export default Detail;
