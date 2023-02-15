import styled from "styled-components";
import Circles from "../assets/pattern-circles.svg";
import ZX9IMG from "../assets/speakers/speaker.png";
import ZX7IMG from "../assets/home/home-speaker-zx7.jpg";
import ZX7IMG1 from "../assets/home/home-speaker-zx7-1.jpg";
import ZX7IMG2 from "../assets/home/home-speaker-zx7-2.jpg";
import YX1IMG from "../assets/home/homeyx1.jpg";
import { Link } from "react-router-dom";

export default function HomeProductCards() {
  return (
    <Container>
      <ZX9Spekar>
        <ZX9Img src={ZX9IMG} alt="ZX9Spekar" />
        <ZX9Info>
          <ZX9H1>
            ZX9 <br /> SPEAKER
          </ZX9H1>
          <p
            style={{
              color: "white",
              opacity: 0.75,
              paddingInline: 10,
              marginBottom: 15,
            }}
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers/zx9">
            <ZX9Button>SEE PRODUCT</ZX9Button>
          </Link>
        </ZX9Info>
      </ZX9Spekar>
      <ZX7Speaker>
        <h1 style={{ letterSpacing: 1.5, marginBottom: 20 }}>ZX7 SPEAKER</h1>
        <Link to="/speakers/zx7">
          <ZX7YX1Button>SEE PRODUCT</ZX7YX1Button>
        </Link>
      </ZX7Speaker>
      <YX1EarphoneContainer>
        <YX1Img src={YX1IMG} alt="yx1earphone" />
        <YX1Earphone>
          <h1 style={{ fontSize: 28, letterSpacing: 1.5, marginBottom: 25 }}>
            YX1 EARPHONES
          </h1>
          <Link to="/earphones/yx1">
            <ZX7YX1Button style={{ margin: 0 }}>SEE PRODUCT</ZX7YX1Button>
          </Link>
        </YX1Earphone>
      </YX1EarphoneContainer>
    </Container>
  );
}

const ZX9Info = styled.div`
  @media (min-width: 1100px) {
    position: absolute;
    right: 100px;
    p {
      max-width: 350px;
      padding: 0 !important;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

const ZX9Img = styled.img`
  height: 200px;
  @media (min-width: 1100px) {
    height: 450px;
    position: absolute;
    bottom: -10px;
    left: 100px;
  }
`;

const ZX9H1 = styled.h1`
  color: white;
  letter-spacing: 1.5px;
  margin-block: 30px;
  line-height: 1.15;
  @media (min-width: 650px) {
    font-size: 56px;
    margin-top: 60px;
  }
`;

const YX1Img = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  @media (min-width: 650px) {
    width: 50%;
    height: 100%;
  }

  @media (min-width: 1100px) {
    width: 100%;
    margin-right: 15px;
  }
`;

const YX1Earphone = styled.div`
  background-color: #f2f2f2;
  margin-top: 20px;
  border-radius: 8px;
  padding-left: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 650px) {
    margin: 0;
    padding: 0;
    padding-inline: 35px;
    height: 100%;
    width: 100%;
    margin-left: 20px;
  }
  @media (min-width: 1100px) {
    padding: 0;
    margin: 0;
    margin-left: 15px;
    h1 {
      margin-left: 90px;
    }
    a {
      margin-left: 90px;
    }
  }
`;

const YX1EarphoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  @media (min-width: 650px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 300px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
  }
`;

const ZX7YX1Button = styled.button`
  width: 160px;
  background: transparent;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 15px;
  border: 2px solid #2c2c2c;
  margin-top: 10px;
  font-family: "Manrope";

  &:hover {
    transition: all 0.5s ease;
    background: #000000;
    color: white;
    cursor: pointer;
  }
`;

const ZX9Button = styled.button`
  width: 160px;
  background: black;
  color: white;
  padding: 15px;
  font-weight: 700;
  font-family: "Manrope";
  letter-spacing: 1px;
  border: none;
  margin-top: 10px;
  @media (min-width: 1100px) {
    margin-top: 30px;
  }

  &:hover {
    transition: all 0.5s ease;
    background: #4c4c4c;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;
  @media (min-width: 1100px) {
    align-items: center;
  }
`;

const ZX9Spekar = styled.div`
  background: #d87d4a;
  height: 600px;
  background-image: url(${Circles});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  @media (min-width: 650px) {
    height: 720px;
  }

  @media (min-width: 1100px) {
    height: 560px;
    display: flex;
    flex-direction: row;
    position: relative;
    width: 1100px;
    z-index: 0;
    overflow-y: hidden;
    background-position-x: -192px;
    background-position-y: -60px;
    background-size: 950px;
  }
`;

const ZX7Speaker = styled.div`
  background-image: url(${ZX7IMG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 325px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  margin-top: 25px;
  width: 100%;
  @media (min-width: 650px) {
    background-image: url(${ZX7IMG1});
  }

  @media (min-width: 1100px) {
    width: 1100px;
    background-image: url(${ZX7IMG2});
    padding-left: 100px;
  }
`;
