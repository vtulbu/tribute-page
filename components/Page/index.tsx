import Information from "../../lib/info";
import { InfoContent } from "../InfoContent";
import StyledPage from "./styled";

function Page() {
  return (
    <StyledPage>
      {Information.map((info, index) => (
        <InfoContent
          key={info.id}
          id={index}
          name={String(info.Name)}
          motto={String(info.Motto)}
          paragraphe={info.Paragraphe}
          year={info.Year}
          image={info.Image}
          alt={info.Alt}
          eventBox={String(info.EventBox)}
          linkDescription={String(info.LinkDescription)}
          link={String(info.Link)}
        />
      ))}
    </StyledPage>
  );
}

export default Page;
