import React from "react";
import axios from "axios";
import StyleHome from "./home.style";
import { Loading } from "../../../components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      currentPage: 1,
      recordPerPage: 5,
      pageNumbers: []
    };
  }

  componentDidMount() {
    const { recordPerPage } = this.state;
    this.setState({ loading: true });
    axios
      .get("http://demo9197058.mockable.io/users")
      .then(({ data }) => {
        let pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / recordPerPage); i++) {
          pageNumbers.push(i);
        }
        this.setState({ data, loading: false, pageNumbers });
      })
      .catch(err => this.setState({ loading: false }));
  }

  heading = columnName => {
    return columnName.map(col => (
      <th key={col} className="table__row--content table__row--column-heading">
        {col}
      </th>
    ));
  };

  renderRow = object => (
    <>
      <td className="table__row--content">{object.first_name}</td>
      <td className="table__row--content">{object.last_name}</td>
      <td className="table__row--content">{object.company_name}</td>
      <td className="table__row--content">{object.city}</td>
      <td className="table__row--content">{object.state}</td>
      <td className="table__row--content">{object.zip}</td>
      <td className="table__row--content">{object.email}</td>
      <td className="table__row--content">{object.web}</td>
      <td className="table__row--content">{object.age}</td>
    </>
  );

  renderPageNumbers = pageNumbers => {
    let pagination = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          className="pagination__item"
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });
    return (
      <>
        {pageNumbers[0] > 2 ? (
          <>
            <li
              key="1"
              id="1"
              className="pagination__item"
              onClick={this.handleClick}
            >
              1
            </li>
            <li>...</li>
          </>
        ) : null}
        {pagination}
        {pageNumbers[0] < 96 ? (
          <>
            <li>...</li>
            <li
              key="100"
              id="100"
              className="pagination__item"
              onClick={this.handleClick}
            >
              100
            </li>
          </>
        ) : null}
      </>
    );
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  showDetails = record => {
    this.props.detail(record);
    this.props.history.push(`/user/${record.id}`);
  };

  paginationRange = () => {
    const { pageNumbers, currentPage } = this.state;
    if (currentPage > 95) {
      return pageNumbers.slice(95, 100);
    }
    const indexOfLastPN = currentPage + 4;
    const indexOfFirstPN = indexOfLastPN - 5;
    return pageNumbers.slice(indexOfFirstPN, indexOfLastPN);
  };

  render() {
    const { loading, data, currentPage, recordPerPage } = this.state;

    // Logic for displaying record according to page no.
    const indexOfLastRecord = currentPage * recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
    const currentRecord = data.slice(indexOfFirstRecord, indexOfLastRecord);

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
            {currentRecord.map(r => (
              <tr
                className="table__row"
                onClick={() => {
                  this.showDetails(r);
                }}
              >
                {this.renderRow(r)}
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="pagination">
          {this.renderPageNumbers(this.paginationRange())}
        </ul>
      </StyleHome>
    );
  }
}

export default Home;
