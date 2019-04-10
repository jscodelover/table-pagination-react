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
      pageNumbers: [],
      searchInput: "",
      newData: []
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

  doubleSizeCol = field => {
    return ["company_name", "company name", "email", "web"].some(el =>
      field.includes(el)
    );
  };

  heading = columnName => {
    return columnName.map(col => {
      const classes = "table__row--content table__row--column-heading";
      return (
        <th
          key={col}
          className={
            this.doubleSizeCol(col)
              ? `${classes} table__row--doubleSize`
              : classes
          }
        >
          {col}
        </th>
      );
    });
  };

  renderRow = object => {
    const displayData = [];
    const classes = "table__row--content";
    for (let key in object) {
      if (key !== "id") {
        displayData.push(
          <td
            key={key}
            className={
              this.doubleSizeCol(key)
                ? `${classes} table__row--doubleSize`
                : classes
            }
          >
            {object[key]}
          </td>
        );
      }
    }
    return displayData;
  };

  renderPageNumbers = (pageNumbers, paginationLength) => {
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
        {pageNumbers[0] < paginationLength - 4 ? (
          <>
            <li>...</li>
            <li
              key={paginationLength}
              id={paginationLength}
              className="pagination__item"
              onClick={this.handleClick}
            >
              {paginationLength}
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

  paginationRange = paginationLength => {
    const { pageNumbers, currentPage } = this.state;
    if (currentPage > paginationLength - 5) {
      return pageNumbers.slice(paginationLength - 5, paginationLength);
    }
    const indexOfLastPN = currentPage + 4;
    const indexOfFirstPN = indexOfLastPN - 5;
    return pageNumbers.slice(indexOfFirstPN, indexOfLastPN);
  };

  updateCurrentPage = (operation, paginationLength) => {
    if (operation === "add")
      this.setState(prevState => ({
        currentPage:
          prevState.currentPage === paginationLength
            ? paginationLength
            : prevState.currentPage + 1
      }));
    else
      this.setState(prevState => ({
        currentPage: prevState.currentPage === 1 ? 1 : prevState.currentPage - 1
      }));
  };

  handleInput = event => {
    const { data } = this.state;
    let newData = data.filter(r => {
      return r.first_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ searchInput: event.target.value, newData });
  };

  render() {
    const {
      loading,
      data,
      currentPage,
      recordPerPage,
      searchInput,
      newData
    } = this.state;

    const records = newData.length ? newData : data;

    // Logic for displaying record according to page no.
    const indexOfLastRecord = currentPage * recordPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
    const currentRecord = records.slice(indexOfFirstRecord, indexOfLastRecord);

    let paginationLength = Math.ceil(records.length / recordPerPage);
    console.log();

    if (loading) return <Loading />;
    return (
      <StyleHome>
        <input
          className="search"
          placeholder="Search by First Name"
          onChange={this.handleInput}
          value={searchInput}
        />
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
        <div className="btnContainer">
          <button
            className="btn"
            onClick={() => {
              this.updateCurrentPage("sub", paginationLength);
            }}
          >
            Previous
          </button>
          <button
            className="btn"
            onClick={() => {
              this.updateCurrentPage("add", paginationLength);
            }}
          >
            Next
          </button>
        </div>
        <ul className="pagination">
          {this.renderPageNumbers(
            this.paginationRange(paginationLength),
            paginationLength
          )}
        </ul>
      </StyleHome>
    );
  }
}

export default Home;
