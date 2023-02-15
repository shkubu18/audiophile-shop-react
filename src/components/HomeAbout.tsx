import styled from "styled-components";
import HomeAboutIMG from "../assets/home/home-about.jpg";
import HomeAboutIMG1 from "../assets/home/home-about1.jpg";
import HomeAboutIMG2 from "../assets/home/home-about2.jpg";

export default function HomeAbout() {
  return (
    <Container>
      <AboutIMG />
      <About>
        <H1>
          BRINGING YOU THE <span style={{ color: "#D87D4A" }}>BEST</span> AUDIO
          GEAR
        </H1>
        <Paragraph>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Paragraph>
      </About>
    </Container>
  );
}

const About = styled.div`
  @media (min-width: 1100px) {
    h1 {
      font-size: 40px;
      margin: 0;
      max-width: 450px;
      line-height: 1.15;
      letter-spacing: 1.4px;
      margin-bottom: 30px;
    }
    p {
      padding: 0;
      margin: 0;
      max-width: 450px;
    }
  }
`;

const Paragraph = styled.p`
  font-weight: 500;
  opacity: 0.5;
  padding-inline: 15px;
  @media (min-width: 750px) {
    padding-inline: 70px;
  }
`;

const AboutIMG = styled.div`
  background-image: url(${HomeAboutIMG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 8px;
  @media (min-width: 650px) {
    background-image: url(${HomeAboutIMG1});
  }

  @media (min-width: 1100px) {
    background-image: url(${HomeAboutIMG2});
    width: 50%;
    height: 550px;
  }
`;

const H1 = styled.h1`
  letter-spacing: 1px;
  margin-block: 30px;
  font-size: 28px;
  @media screen and (min-width: 765px) {
    font-size: 52px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 120px;
  text-align: center;
  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
    margin-top: 200px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    text-align: left;
  }
`;
