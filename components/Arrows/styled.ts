import styled from "@emotion/styled";

export const StyledArrows = styled.div`
  @media only screen and (min-width: 961px) {
    display: flex;
    flex: 1 1 100%;
    font-size: 3vw;
    padding: 2vw 0vw 2vw 0vw;
    order: 3;
    align-self: flex-end;

    .centered-arrow {
      display: flex;
      flex: 100%;
      justify-content: center;
    }

    .link {
      text-decoration: none;
    }

    .arrows {
      color: #3a4a69;
    }

    #down-arrow:hover {
      animation: arrowDown 2s infinite;
      cursor: pointer;
    }

    @keyframes arrowDown {
      0% {
        -webkit-transform: translate(0, 0px);
      }
      50% {
        -webkit-transform: translate(0, 10px);
      }
      100% {
        -webkit-transform: translate(0, 0px);
      }
    }

    #up-arrow:hover {
      animation: arrowUp 2s infinite;
      cursor: pointer;
    }

    @keyframes arrowUp {
      0% {
        -webkit-transform: translate(0, 0px);
      }
      50% {
        -webkit-transform: translate(0, -10px);
      }
      100% {
        -webkit-transform: translate(0, 0px);
      }
    }

    .down-arrow {
      display: flex;
      flex: 100%;
      justify-content: flex-start;
      margin-left: -6.5vw;
    }

    .up-arrow {
      display: flex;
      flex: 100%;
      justify-content: flex-end;
      margin-right: -6.5vw;
      align-self: flex-end;
    }

    #up-arrow-desktop {
      display: none;
    }
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    display: flex;
    flex: 1 1 100%;
    font-size: 4vw;
    padding: 0vw;
    order: 3;
    margin-top: 2vw;
    justify-content: center;

    .centered-arrow {
      display: flex;
      flex: 100%;
      justify-content: center;
    }

    .link {
      text-decoration: none;
    }

    .arrows {
      color: #3a4a69;
    }

    #down-arrow:hover {
      animation: arrowDown 2s infinite;
      cursor: pointer;
    }

    @keyframes arrowDown {
      0% {
        -webkit-transform: translate(0, 0px);
      }
      50% {
        -webkit-transform: translate(0, 10px);
      }
      100% {
        -webkit-transform: translate(0, 0px);
      }
    }

    #up-arrow:hover {
      animation: arrowUp 2s infinite;
      cursor: pointer;
    }

    @keyframes arrowUp {
      0% {
        -webkit-transform: translate(0, 0px);
      }
      50% {
        -webkit-transform: translate(0, -10px);
      }
      100% {
        -webkit-transform: translate(0, 0px);
      }
    }

    #up-arrow-tablet {
      display: none;
    }
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    display: flex;
    flex: 1 1 100%;
    font-size: 4vw;
    padding: 0vw;
    order: 3;
    margin-top: 2vw;
    justify-content: center;

    .centered-arrow {
      display: flex;
      flex: 100%;
      justify-content: center;
    }

    .link {
      text-decoration: none;
    }

    .arrows {
      color: #3a4a69;
    }

    #up-arrow-tablet {
      display: none;
    }
    .down-arrow, .up-arrow{
      display: none;
    }
  }

  }
`;
