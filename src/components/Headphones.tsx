import styled from "styled-components";
import { headphonesData } from "../data/headphones-data";
import ViewProducts from "./ViewProducts";
import HomeAbout from "./HomeAbout";
import { Link } from "react-router-dom";
import { MenuBarInfo } from "../types/MenuBarInfo";

export default function Headphones(props: MenuBarInfo) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <Container>
      <HEADER>
        <HeaderH1>HEADPHONES</HeaderH1>
      </HEADER>
      <HeadphoneList>
        {headphonesData.map((headphone) => (
          <Headphone className={headphone.path} key={headphone.id}>
            {window.innerWidth <= 700 ? (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={headphone.img}
                alt={headphone.altName}
              />
            ) : window.innerWidth >= 1100 ? (
              <img
                style={{ width: 540, borderRadius: 8, marginBottom: 40 }}
                src={headphone.img}
                alt={headphone.altName}
              />
            ) : (
              <img
                style={{ width: "100%", borderRadius: 8, marginBottom: 40 }}
                src={headphone.img1}
                alt={headphone.altName}
              />
            )}
            <Info className={headphone.path}>
              {headphone.hint ? <Hint>{headphone.hint}</Hint> : null}
              <Name>
                {headphone.name} <br /> {headphone.productType}
              </Name>
              <Description>{headphone.description}</Description>
              <Link to={headphone.path}>
                <Button>SEE PRODUCT</Button>
              </Link>
            </Info>
          </Headphone>
        ))}
      </HeadphoneList>
      <ViewProducts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HomeAbout />
    </Container>
  );
}

export const Info = styled.div`
  @media (min-width: 1100px) {
    text-align: left;
    margin-left: 100px;
    span {
      padding: 0;
    }
    h1 {
      margin-top: 7px;
    }
  }
`;

const Container = styled.div`
  margin-inline: 25px;
`;

export const HeaderH1 = styled.h1`
  color: white;
  padding-block: 25px;
  letter-spacing: 2px;
  font-size: 28px;
  font-weight: 600;
  @media (min-width: 700px) {
    font-size: 40px;
    padding-block: 90px;
    margin-bottom: 100px;
  }
`;

export const Description = styled.p`
  opacity: 0.5;
  font-weight: 500;
  margin: 0;
  margin-block: 30px;
  @media (min-width: 700px) {
    max-width: 600px;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 1.15;
  @media (min-width: 700px) {
    font-size: 40px;
    line-height: 1.15;
  }
`;

export const Hint = styled.span`
  color: #d87d4a;
  letter-spacing: 10px;
  padding-left: 10px;
  text-align: center;
  margin-bottom: 25px;
  font-size: 14px;
`;

export const HEADER = styled.div`
  background-color: #191919;
  text-align: center;
  margin-inline: -25px;
`;

export const Button = styled.button`
  width: 160px;
  background: #d87d4a;
  color: white;
  padding: 15px;
  border: none;
  font-family: "Manrope";
  letter-spacing: 1px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: #fbaf85;
  }
`;

const Headphone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
  @media (min-width: 1100px) {
    flex-direction: row;
    .xx99mark1 {
      margin: 0;
      margin-right: 100px;
    }
  }
`;

const HeadphoneList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  @media (min-width: 1100px) {
    max-width: 1100px;
    margin: auto;
    .xx99mark1 {
      flex-direction: row-reverse;
    }
  }
`;
