import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { AiOutlineTwitter as TwitterIcon } from "react-icons/ai";
import { AiFillFacebook as FacebookIcon } from "react-icons/ai";
import { AiOutlineInstagram as InstagramIcon } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const handleClick = (prop: string) => {
    if (prop === pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <MainContainer>
      <Container>
        <LogoNavContainer>
          <img style={{ width: 143 }} src={Logo} alt="logo" />
          <Navbar>
            <Link
              className="footer-links"
              onClick={() => handleClick("/")}
              to="/"
              style={{
                marginBottom: 22,
                color: "white",
                textDecoration: "none",
              }}
            >
              HOME
            </Link>
            <Link
              className="footer-links"
              onClick={() => handleClick("/headphones")}
              to="/headphones"
              style={{
                marginBottom: 22,
                color: "white",
                textDecoration: "none",
              }}
            >
              HEADPHONES
            </Link>
            <Link
              className="footer-links"
              onClick={() => handleClick("/speakers")}
              to="/speakers"
              style={{
                marginBottom: 22,
                color: "white",
                textDecoration: "none",
              }}
            >
              SPEAKERS
            </Link>
            <Link
              className="footer-links"
              onClick={() => handleClick("/earphones")}
              to="/earphones"
              style={{
                marginBottom: 22,
                color: "white",
                textDecoration: "none",
              }}
            >
              EARPHONES
            </Link>
          </Navbar>
        </LogoNavContainer>

        <Paragraph>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </Paragraph>
        <Div>
          <Span>CopyRight 2021. All Right Reserved</Span>

          <SocLinks>
            <FacebookIcon
              className="fb-icon"
              style={{ color: "white", fontSize: 30, marginRight: 7 }}
            />
            <TwitterIcon
              className="twitter-icon"
              style={{ color: "white", fontSize: 30, marginRight: 7 }}
            />
            <InstagramIcon
              className="insta-icon"
              style={{ color: "white", fontSize: 30 }}
            />
          </SocLinks>
        </Div>
      </Container>
    </MainContainer>
  );
}

const SocLinks = styled.div`
  text-align: center;
  @media (min-width: 1100px) {
    margin-top: -150px;
  }
  .fb-icon {
    &:hover {
      transition: all 0.6s ease;
      color: #d87d4a !important;
      cursor: pointer;
    }
  }
  .twitter-icon {
    &:hover {
      transition: all 0.6s ease;
      color: #d87d4a !important;
      cursor: pointer;
    }
  }
  .insta-icon {
    &:hover {
      transition: all 0.6s ease;
      color: #d87d4a !important;
      cursor: pointer;
    }
  }
`;

const MainContainer = styled.div`
  background: #101010;
  @media (min-width: 1100px) {
    margin-top: 100px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 765px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-inline: 25px;
  }
`;

const Span = styled.span`
  color: white;
  opacity: 0.5;
  text-align: center;
  margin-block: 45px;
`;

const Paragraph = styled.p`
  opacity: 0.5;
  color: white;
  padding-inline: 25px;
  text-align: center;
  line-height: 1.6;
  @media (min-width: 765px) {
    text-align: left;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-size: 13px;
  letter-spacing: 2px;
  margin-bottom: 20px;
  @media (min-width: 765px) {
    flex-direction: row;
  }
  .footer-links {
    margin-right: 30px;
    transition: all 0.5s ease;
    &:hover {
      color: #d87d4a !important;
    }
  }
`;

const LogoNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  @media (min-width: 765px) {
    align-items: flex-start;
    margin-left: 25px;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #101010;
  padding-block: 35px;
  margin-top: 100px;
  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
    p {
      max-width: 570px;
    }
  }
`;
