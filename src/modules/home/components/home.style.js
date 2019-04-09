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
        padding: 0.5rem 0.1rem;
        display: flex;
        flex: 1 0;
        align-items: center;
        justify-content: center;
        border: 1px solid #888888;
        border-collapse: collapse;
        border-spacing: 0;
      }
    }
  }
`;

export default StyleHome;
