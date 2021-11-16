import styled from "@emotion/styled";

export const StyledEventBox = styled.p`
  @media only screen and (min-width: 961px) {
    width: 100%;
    background-color: #536a998a;
    font-size: 1.1vw;
    font-weight: 600;
    text-align: center;
    padding: 0.7vw 1vw 0.7vw 1vw;
    margin-top: 2vw;
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    width: 100%;
    background-color: #536a998a;
    font-size: 2vw;
    font-weight: 600;
    text-align: center;
    padding: 0.7vw 1vw 0.7vw 1vw;
  }
  // mobile version
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
