import styled from "@emotion/styled";

const StyledNavBar = styled.div`
  @media only screen and (min-width: 961px) {
    flex: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0vw 7vw 0vw 7vw;
    text-transform: uppercase;

    h1 {
      margin-top: 1vw;
      margin-bottom: 1vw;
      font-size: 3vw;
      letter-spacing: 1vw;
      font-weight: 900;
      text-shadow: 6px 6px 6px #00000040;
    }

    nav {
      font-size: 1.2vw;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 12vw;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  //tablet version
  @media only screen and (min-width: 500px) and (max-width: 961px) {
    flex: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0vw 7vw 0vw 7vw;
    text-transform: uppercase;

    h1 {
      margin-top: 3vw;
      margin-bottom: 2vw;
      font-size: 5vw;
      letter-spacing: 1vw;
      font-weight: 900;
      text-shadow: 6px 6px 6px #00000040;
    }

    nav {
      font-size: 2vw;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15vw;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  // mobile version
  @media only screen and (max-width: 500px) {
    flex: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0vw 3vw 0vw 3vw;
    text-transform: uppercase;

    h1 {
      margin-top: 3vw;
      margin-bottom: 2vw;
      font-size: 5vw;
      letter-spacing: 1vw;
      font-weight: 900;
      text-shadow: 6px 6px 6px #00000040;
    }

    nav {
      font-size: 2vw;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15vw;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

export default StyledNavBar;
