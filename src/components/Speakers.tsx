import styled from "styled-components";
import { speakersData } from "../data/speakers-data";
import ViewProducts from "./ViewProducts";
import HomeAbout from "./HomeAbout";
import { Link } from "react-router-dom";
import { MenuBarInfo } from "../types/MenuBarInfo";
import {
  HeaderH1,
  Description,
  Name,
  Hint,
  HEADER,
  Button,
  Info,
} from "./Headphones";

export default function Speakers(props: MenuBarInfo) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <div style={{ marginInline: 25 }}>
      <HEADER>
        <HeaderH1>SPEAKERS</HeaderH1>
      </HEADER>
      <SpeakerList>
        {speakersData.map((speaker) => (
          <Speaker className={speaker.path} key={speaker.id}>
            {window.innerWidth <= 700 ? (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={speaker.img}
                alt={speaker.altName}
              />
            ) : window.innerWidth >= 1100 ? (
              <img
                style={{ width: 540, borderRadius: 8, marginBottom: 40 }}
                src={speaker.img}
                alt={speaker.altName}
              />
            ) : (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={speaker.img1}
                alt={speaker.altName}
              />
            )}
            <Info className={speaker.path}>
              {speaker.hint ? <Hint>{speaker.hint}</Hint> : null}
              <Name>
                {speaker.name} <br /> {speaker.productType}
              </Name>
              <Description>{speaker.description}</Description>
              <Link to={speaker.path}>
                <Button>SEE PRODUCT</Button>
              </Link>
            </Info>
          </Speaker>
        ))}
      </SpeakerList>
      <ViewProducts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HomeAbout />
    </div>
  );
}

const Speaker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
  @media (min-width: 1100px) {
    flex-direction: row;
    .zx7 {
      margin: 0;
      margin-right: 100px;
    }
  }
`;

const SpeakerList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: auto;
    .zx7 {
      flex-direction: row-reverse;
    }
  }
`;
