import styled from "@emotion/styled";

type StyleProps = {
  textAlign: string;
  order: string;
  marginTop: string;
};

export const StyledYear = styled.p<StyleProps>`
  @media only screen and (min-width: 961px) {
    color: #3a538ae7;
    font-size: 3.5vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    margin: 0vw 0vw 2vw 0vw;
    flex: 100%;
    text-align: ${(props) => props.textAlign};
    order: ${(props) => props.order};
    margin-top: ${(props) => props.marginTop};
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    color: #3a538ae7;
    font-size: 5vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    flex: 100%;
    text-align: ${(props) => props.textAlign};
    order: -1;
    margin-top: 3vw;
    margin-bottom: 0vw;
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    color: #3a538ae7;
    font-size: 6vw;
    font-weight: 600;
    letter-spacing: 0.2vw;
    flex: 100%;
    text-align: ${(props) => props.textAlign};
    order: -1;
    margin-top: 1vw;
    margin-bottom: 2vw;
  }
`;
