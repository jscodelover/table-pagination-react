import React from "react";
import StyleHome from "./home.style";

const Home = () => {
  function heading(columnName) {
    return columnName.map(col => (
      <th key={col} className="table__row--content table__row--column-heading">
        {col}
      </th>
    ));
  }
  return (
    <StyleHome>
      <table className="table">
        <caption className="table__caption">
          <span className="table__caption--text1">Data Peace</span>
          <br />
          <span className="table__caption--text2">Front End Task</span>
        </caption>
        <thead>
          <tr className="table__row">
            {heading([
              "first name",
              "last name",
              "company name",
              "city",
              "state",
              "zip",
              "email",
              "web",
              "age"
            ])}
          </tr>
        </thead>
        <tbody>
          <tr className="table__row" />
        </tbody>
      </table>
    </StyleHome>
  );
};

export default Home;
