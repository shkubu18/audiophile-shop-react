import styled from "styled-components";
import { earphonesData } from "../data/earphones-data";
import ViewProducts from "./ViewProducts";
import HomeAbout from "./HomeAbout";
import { Link } from "react-router-dom";
import { MenuBarInfo } from "../interfaces/MenuBarInfo";
import {
  HeaderH1,
  Description,
  Name,
  Hint,
  HEADER,
  Button,
  Info,
} from "./Headphones";

export default function Earphones(props: MenuBarInfo) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <div style={{ marginInline: 25 }}>
      <HEADER>
        <HeaderH1>EARPHONES</HeaderH1>
      </HEADER>
      <EarphoneList>
        {earphonesData.map((earphone) => (
          <Earphone key={earphone.id}>
            {window.innerWidth <= 700 ? (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={earphone.img}
                alt={earphone.altName}
              />
            ) : window.innerWidth >= 1100 ? (
              <img
                style={{ width: 540, borderRadius: 8, marginBottom: 40 }}
                src={earphone.img}
                alt={earphone.altName}
              />
            ) : (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={earphone.img1}
                alt={earphone.altName}
              />
            )}
            <Info>
              {earphone.hint ? <Hint>{earphone.hint}</Hint> : null}
              <Name>
                {earphone.name} <br /> {earphone.productType}
              </Name>
              <Description>{earphone.description}</Description>
              <Link to={earphone.path}>
                <Button>SEE PRODUCT</Button>
              </Link>
            </Info>
          </Earphone>
        ))}
      </EarphoneList>
      <ViewProducts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HomeAbout />
    </div>
  );
}

const Earphone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const EarphoneList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: auto;
  }
`;
