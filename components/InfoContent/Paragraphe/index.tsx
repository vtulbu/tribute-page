import { FC } from "react";
import Information from "../../../pages/info";
import { StyledParagraphe } from "./styled";

type Props = {
  id: number;
  paragraphe: string;
};

export const Paragraphe: FC<Props> = ({ id, paragraphe }) => {
  return (
    <>
      <StyledParagraphe
        fontSize={
          id == 0 ? "1.1vw" : id == Information.length - 1 ? "1.3vw" : "1vw"
        }
        flex="100%"
      >
        {paragraphe}
      </StyledParagraphe>
    </>
  );
};
