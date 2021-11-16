import { FC } from "react";
import { StyledYear } from "./styled";

type Props = {
  id: number;
  year: string;
};

export const Year: FC<Props> = ({ id, year }) => {
  return (
    <StyledYear
      textAlign={id == 0 ? "" : "center"}
      order={id % 2 == 0 ? "1" : ""}
      marginTop={id % 2 == 0 ? "2vw" : ""}
    >
      {year}
    </StyledYear>
  );
};
