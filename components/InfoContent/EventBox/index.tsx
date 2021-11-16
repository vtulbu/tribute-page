import { FC } from "react";
import { StyledEventBox } from "./styled";

type Props = {
  eventBox: string;
};

export const EventBox: FC<Props> = ({ eventBox }) => {
  return <StyledEventBox>{eventBox}</StyledEventBox>;
};
