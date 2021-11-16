import styled from "@emotion/styled";

type StyleProps = {
  fontSize: string;
  flex: string;
};

export const StyledParagraphe = styled.p<StyleProps>`
@media only screen and (min-width: 961px) {
    font-weight: 600;
    font-size: ${(props) => props.fontSize};
    text-align: justify;
    margin: 1vw 0vw 2vw 0vw;
    flex: ${(props) => props.flex}
    align-items: center;
}

//tablet version
    @media only screen and (min-width: 500px) and (max-width: 961px) {
    font-weight: 600;
    font-size: 1.7vw;
    text-align: justify;
    margin: 2vw 0vw 0vw 0vw;
    flex: ${(props) => props.flex}
    align-items: center;
    }

// mobile version
    @media only screen and (max-width: 500px) {
    font-weight: 600;
    font-size: 2.3vw;
    text-align: justify;
    margin: -1.6vw 0vw 0vw 0vw;
    flex: ${(props) => props.flex}
    align-items: center;
    }
`;
