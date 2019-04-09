import React from "react";
import axios from "axios";
import StyleHome from "./home.style";
import { Loading } from "../../../components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("http://demo9197058.mockable.io/users")
      .then(({ data }) => this.setState({ data, loading: false }))
      .catch(err => this.setState({ loading: false }));
  }

  heading = columnName => {
    return columnName.map(col => (
      <th key={col} className="table__row--content table__row--column-heading">
        {col}
      </th>
    ));
  };

  render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
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
              {this.heading([
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
  }
}

export default Home;
