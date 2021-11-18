import { FC, useState } from "react";
import Image from "next/dist/client/image";
import { StyledImages } from "./styled";
import Information from "../../../lib/info";

type Props = {
  id: number;
  image: string;
  alt: string;
};

export const ImageComponent: FC<Props> = ({ id, image, alt }) => {
  const [ready, setReady] = useState(false);

  const handleLoad = (event: any) => {
    event.persist();
    if (event.target.srcset) {
      setReady(true);
    }
  };
  return (
    <StyledImages height={id == 0 ? "30vw" : "25vw"} ready={ready}>
      <Image
        src={image}
        alt={alt}
        layout="fill"
        objectFit={
          id == 0 || id == Information.length - 1 ? "cover" : "contain"
        }
        onLoad={handleLoad}
      />
    </StyledImages>
  );
};
