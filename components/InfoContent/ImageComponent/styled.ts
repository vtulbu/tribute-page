import styled from "@emotion/styled";

type StyleProps = {
  height: string;
  ready: boolean;
};

export const StyledImages = styled.div<StyleProps>`
  @media only screen and (min-width: 961px) {
    position: relative;
    flex: 100%;
    height: ${(props) => props.height};
    margin: 0;
    padding: 0;
    order: 1;
    width: 100%;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 2.3s ease-in-out" : "")};
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    position: relative;
    flex: 40%;
    height: 40vw;
    margin: 0vw 2vw 0vw 0vw;
    padding: 0;
    order: 1;
    width: 100%;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 2.3s ease-in-out" : "")};
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    position: relative;
    flex: 40%;
    height: 35vw;
    margin: 0vw 2vw 3vw 0vw;
    padding: 0vw;
    order: 1;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 2.3s ease-in-out" : "")};
  }
`;
