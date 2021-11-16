import styled from "@emotion/styled";

type StyleProps = {
  idPage: number;
  ready?: boolean;
};

//Style first page
export const StyledFirstPage = styled.div<StyleProps>`
  @media only screen and (min-width: 961px) {
    background-color: #ffffff;
    margin-top: 6vw;
    margin-bottom: 3vw;
    margin-left: auto;
    flex: 0 1 90%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    box-shadow: 0px 8px 10px 0px #00000040;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 0.5s ease-in-out" : "")};

    .left-section {
      flex: 0 1 45%;
      margin-left: 7vw;
      padding-top: 1vw;
    }

    .right-section {
      flex: 0 1 35%;
      padding-top: 3vw;
    }

    .name {
      font-size: 2.7vw;
      font-weight: 800;
      margin: 0;
    }

    .motto {
      width: 70%;
      font-size: 2.3vw;
      font-weight: 500;
      white-space: pre;
      letter-spacing: 0.2vw;
    }
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    background-color: #ffffff;
    margin-top: 6vw;
    margin-bottom: 3vw;
    margin-left: auto;
    flex: 100%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    box-shadow: 0px 8px 10px 0px #00000040;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 0.5s ease-in-out" : "")};

    .left-section {
      flex: 0 0 50%;
      margin-left: 7vw;
      padding-top: 1vw;
    }

    .right-section {
      flex: 0 1 35%;
      padding-top: 3vw;
    }

    .name {
      font-size: 3.5vw;
      font-weight: 800;
      margin: 0;
    }

    .motto {
      width: 70%;
      font-size: 2.6vw;
      font-weight: 500;
      white-space: pre;
      letter-spacing: 0.2vw;
    }
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    background-color: #ffffff;
    padding: 0vw 5vw 2vw 5vw;
    margin: 2vw;
    flex: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-flow: row wrap;
    box-shadow: 0px 8px 10px 0px #00000040;
    opacity: ${(props) => (props.ready ? "1" : "0")};
    transition: ${(props) => (props.ready ? "opacity 0.5s ease-in-out" : "")};

    .left-section {
      flex: 0 0 90%;
      margin-left: 3vw;
      order: 1;
    }

    .right-section {
      width: 80%;
      flex: 100%;
      padding-top: 3vw;
      margin-left: 3vw;
    }

    .name {
      font-size: 4.5vw;
      font-weight: 800;
      margin: 0;
    }

    .motto {
      margin-top: 1vw;
      width: 70%;
      font-size: 3vw;
      font-weight: 500;
      white-space: pre;
      letter-spacing: 0.2vw;
    }
  }
`;

//Style second to penultimate page
export const StyledPages = styled.div<StyleProps>`
  @media only screen and (min-width: 961px) {
    background-color: #ffffff;
    margin-top: 3vw;
    margin-bottom: 3vw;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 50%;
    padding: 5vw 7vw 0vw 7vw;
    align-items: center;
    justify-content: center;
    width: 100%;

    .event-paragraphe-left {
      order: 2;
    }
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    background-color: #ffffff;
    margin-top: ${(props) => (props.idPage % 2 == 0 ? "0vw" : "3vw")};
    margin-bottom: ${(props) => (props.idPage % 2 == 0 ? "3vw" : "0vw")};
    display: flex;
    flex-direction: ${(props) =>
      props.idPage % 2 == 0 ? "row" : "row-reverse"};
    flex-wrap: wrap;
    flex: 0 0 100%;
    padding: 3vw 3vw 0vw 3vw;
    align-items: flex-start;
    justify-content: space-between;

    .event-paragraphe,
    .event-paragraphe-left {
      flex: 0 0 45%;
      margin: 2.2vw 3vw 0vw 1vw;
    }
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    background-color: #ffffff;
    margin-top: 0vw;
    margin-bottom: 0vw;
    display: flex;
    flex-direction: ${(props) =>
      props.idPage % 2 == 0 ? "row-reverse" : "row"};
    flex-wrap: wrap;
    flex: 0 0 100%;
    padding: 3vw 3vw 0vw 3vw;
    align-items: flex-start;
    justify-content: space-between;

    .event-paragraphe,
    .event-paragraphe-left {
      flex: 0 0 45%;
      margin: 2.2vw 3vw 0vw 1vw;
    }
  }
`;

//Style last page
export const StyledLastPage = styled.div`
  @media only screen and (min-width: 961px) {
    background-color: #ffffff;
    margin-top: 3vw;
    margin-bottom: 6vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    flex: 0 1 90%;
    padding: 5vw 25vw 0vw 25vw;

    .linkWikipedia {
      background-color: #536a998a;
      font-size: 1.1vw;
      font-weight: 600;
      text-align: center;
      padding: 0.7vw 1vw 0.7vw 1vw;
      margin: 0vw 0vw 2vw 0vw;
      flex: 100%;
      margin-top: 2vw;
      text-decoration: none;
      color: black;
      order: 2;
    }
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    background-color: #ffffff;
    margin-top: 3vw;
    margin-bottom: 6vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    flex: 100%;
    padding: 5vw 25vw 0vw 25vw;

    .linkWikipedia {
      background-color: #536a998a;
      font-size: 1.6vw;
      font-weight: 600;
      text-align: center;
      padding: 0.7vw 1vw 0.7vw 1vw;
      margin: 0;
      flex: 100%;
      margin-top: 2vw;
      text-decoration: none;
      color: black;
      order: 1;
    }
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    background-color: #ffffff;
    margin-bottom: 6vw;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    flex: 100%;
    padding: 5vw 25vw 0vw 25vw;

    .linkWikipedia {
      background-color: #536a998a;
      font-size: 1.6vw;
      font-weight: 600;
      text-align: center;
      padding: 0.7vw 1vw 0.7vw 1vw;
      margin: 0;
      flex: 100%;
      margin-top: 2vw;
      text-decoration: none;
      color: black;
      order: 1;
    }
  }
`;
