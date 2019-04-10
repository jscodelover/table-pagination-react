import styled from "styled-components";

const StyleDetail = styled.div`
  .header {
    position: sticky;
    top: 0;
    margin-bottom: 20px;
    padding: 16px;
    font-size: 25px;
    font-weight: bold;
    background-color: #333;
    color: #fff;
    .backButton {
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .record {
    margin: 10px;
    .row {
      display: flex;
      justify-content: space-between;
      padding: 8px 17px;
      border-bottom: 1px solid;
      &__key {
        text-transform: capitalize;
      }
      &__value {
        color: #808080;
      }
    }
  }
`;

export default StyleDetail;
