import styled from "styled-components";

const StyleHome = styled.div`
  padding: 0 4%;
  .table {
    display: flex;
    flex-flow: column nowrap;
    line-height: 1.25;
    border: 0;
    &__caption {
      padding: 1rem;
      letter-spacing: 3px;
      caption-side: top;
      &--text1 {
        font-size: 1.5rem;
        font-weight: 900;
        color: #999;
      }
      &--text2 {
        font-size: 1.2rem;
        font-weight: 300;
        color: #a52a2a;
      }
    }
    &__row {
      display: flex;
      font-size: 1.1rem;
      word-wrap: break-word;
      overflow-wrap: break-word;
      word-break: break-all;
      cursor: pointer;
      &:nth-of-type(even) {
        background-color: #e5e5e5;
      }
      &--column-heading {
        font-weight: 700;
        color: #f3f3f3;
        background-color: #08acbd;
        text-transform: capitalize;
      }
      &--content {
        padding: 5px 10px;
        display: flex;
        flex: 1 0;
        align-items: center;
        justify-content: center;
        border: 1px solid #888888;
        border-collapse: collapse;
        border-spacing: 0;
      }

      &--doubleSize {
        flex-grow: 2;
      }

      &:hover {
        background-color: #312f2f;
        color: white;
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin: 20px auto;
    font-size: 16px;
    list-style-type: none;
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 18px;
      cursor: pointer;
      background: #f1f1f1;
      text-align: center;
      border: 1px solid white;
    }
    &__active {
      background: tomato;
    }
  }
`;

export default StyleHome;
