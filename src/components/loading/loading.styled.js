import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

const StyleLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  animation: ${spin} 1s linear infinite;
  border: 5px solid #ece0de;
  border-top: 5px solid #000;
  border-radius: 50%;
`;

export default StyleLoading;
