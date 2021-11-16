import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  @media only screen and (min-width: 961px) {
    color: white;
    font-size: 1.1vw;
    position: absolute;
    margin-top: 62vw;
  }
  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    color: white;
    font-size: 1.5vw;
    position: absolute;
    margin-top: 83vw;
  }
  // mobile version
  @media only screen and (max-width: 500px) {
    color: white;
    position: absolute;
    margin-top: 74vw;
    font-size: 2vw;
  }
`;
