import { Link } from "@mui/material";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import Information from "../../lib/info";
import { StyledArrows } from "./styled";
import { FC } from "react";

type Props = {
  idInfo: number;
};

export const Arrows: FC<Props> = ({ idInfo }) => {
  return idInfo == 0 ? (
    <StyledArrows>
      <div className="centered-arrow">
        <Link className="link" href={"#" + (idInfo + 1)}>
          <BsArrowDown id="down-arrow" className="arrows" />
        </Link>
      </div>
    </StyledArrows>
  ) : idInfo == Information.length - 1 ? (
    <StyledArrows>
      <div className="centered-arrow">
        <Link className="link" href={"#" + 0}>
          <BsArrowUp id="up-arrow" className="arrows" />
        </Link>
      </div>
    </StyledArrows>
  ) : idInfo % 2 == 0 ? (
    <StyledArrows>
      <div className="down-arrow">
        <Link className="link" href={"#" + (idInfo + 1)}>
          <BsArrowDown id="down-arrow" className="arrows" />
        </Link>
      </div>
      <div className="up-arrow" id="up-arrow-desktop">
        <Link
          className="link"
          href={"#" + (idInfo - 3 <= 0 ? "0" : idInfo - 3)}
        >
          <BsArrowUp id="up-arrow" className="arrows" />
        </Link>
      </div>
    </StyledArrows>
  ) : (
    <StyledArrows>
      <div className="up-arrow" id="up-arrow-tablet">
        <Link className="link" href={"#" + (idInfo - 1)}>
          <BsArrowUp id="up-arrow" className="arrows" />
        </Link>
      </div>
    </StyledArrows>
  );
};
