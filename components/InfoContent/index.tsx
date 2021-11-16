import { FC, useState } from "react";
import Information from "../../pages/info";
import * as Style from "./styled";
import NavBar from "../NavBar";
import { Arrows } from "../Arrows";
import { Year } from "./Year/index";
import { EventBox } from "./EventBox";
import { Paragraphe } from "./Paragraphe";
import { ImageComponent } from "./ImageComponent";
import { Footer } from "../Footer";

type Props = {
  id: number;
  name: string;
  motto: string;
  paragraphe: string;
  year: string;
  image: string;
  alt: string;
  eventBox: string;
  linkDescription: string;
  link: string;
};

export const InfoContent: FC<Props> = ({
  id,
  name,
  motto,
  paragraphe,
  year,
  image,
  alt,
  eventBox,
  link,
  linkDescription,
}) => {
  const [ready, setReady] = useState(false);

  const handleLoad = (event: any) => {
    event.persist();
    if (event.target.srcset) {
      setReady(true);
    }
  };

  return id == 0 ? (
    //First page
    <Style.StyledFirstPage
      id={String(id)}
      ready={ready}
      onLoad={handleLoad}
      idPage={id}
    >
      <NavBar />
      <div className="left-section">
        <ImageComponent id={id} image={image} alt={alt} />
        <Paragraphe id={id} paragraphe={paragraphe} />
      </div>
      <div className="right-section">
        <h2 className="name">{name}</h2>
        <h3 className="motto">{motto}</h3>
        <Year id={id} year={year} />
      </div>
      <Arrows idInfo={id} />
    </Style.StyledFirstPage>
  ) : id > 0 && id < Information.length - 1 ? (
    //second to penultimate page
    <Style.StyledPages id={String(id)} idPage={id}>
      <div
        className={id % 2 == 0 ? "event-paragraphe-left" : "event-paragraphe"}
      >
        <EventBox eventBox={eventBox} />
        <Paragraphe id={id} paragraphe={paragraphe} />
      </div>
      <Year id={id} year={year} />
      <ImageComponent id={id} image={image} alt={alt} />
      <Arrows idInfo={id} />
    </Style.StyledPages>
  ) : id + 1 == Information.length ? (
    //last page
    <Style.StyledLastPage id={String(id)}>
      <EventBox eventBox={eventBox} />
      <Paragraphe id={id} paragraphe={paragraphe} />
      <Year id={id} year={year} />
      <ImageComponent id={id} image={image} alt={alt} />
      <a className="linkWikipedia" href={link} target="_blank" rel="noreferrer">
        {linkDescription}
      </a>
      <Arrows idInfo={id} />
      <Footer />
    </Style.StyledLastPage>
  ) : (
    <div></div>
  );
};
