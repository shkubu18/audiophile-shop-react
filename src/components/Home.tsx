import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIMG from "../assets/home/home-background-mobile.png";
import HomeIMG2 from "../assets/home/image-hero.jpg";
import HomeAbout from "./HomeAbout";
import HomeProductCards from "./HomeProductCards";
import ViewProducts from "./ViewProducts";
import { MenuBarInfo } from "../types/MenuBarInfo";

export default function Home(props: MenuBarInfo) {
  const { isMenuOpen, setIsMenuOpen } = props;

  return (
    <Container>
      <HomeContainer>
        <NewProduct>
          <Product>
            <ProductInfo>
              <H4>NEW PRODUCT</H4>
              <H1>
                XX99 MARK || <br /> HEADPHONES
              </H1>
              <HomeDescription>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </HomeDescription>
              <Link to="headphones/xx99mark2">
                <Button>SEE PRODUCT</Button>
              </Link>
            </ProductInfo>
          </Product>
        </NewProduct>
      </HomeContainer>
      <ViewProducts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HomeProductCards />
      <HomeAbout />
    </Container>
  );
}

const ProductInfo = styled.div`
  @media (min-width: 1150px) {
    display: flex;
    flex-direction: column;
    text-align: left;
    p {
      padding: 0;
    }
    h4 {
      text-align: left;
      margin-left: 0;
    }
  }
`;

const Product = styled.div`
  @media (min-width: 1150px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 76px + 602px);
  margin-inline: 25px;
  @media (min-width: 1100px) {
    margin: 0;
  }
`;

const HomeDescription = styled.p`
  color: white;
  opacity: 0.75;
  padding-inline: 20px;
  margin-top: 25px;
  margin-bottom: 10px;
  max-width: 445px;
`;

const HomeContainer = styled.div`
  min-height: 510px;
  background-image: url(${HomeIMG});
  background-position: center;
  background-position-y: -80px;
  background-size: 370px;
  background-repeat: no-repeat;
  background-color: #191919;
  display: flex;
  justify-content: center;
  margin-inline: -25px;
  @media (min-width: 765px) {
    background-size: 430px;
    min-height: 560px;
    background-position-y: -110px;
  }

  @media (min-width: 1100px) {
    margin: 0;
  }

  @media (min-width: 1150px) {
    background-image: url(${HomeIMG2});
    background-size: 1400px;
    min-height: 580px;
  }
`;

const NewProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 1150px) {
    width: 1100px;
  }
`;

const H1 = styled.h1`
  color: white;
  line-height: 1.15;
  font-size: 32px;
  letter-spacing: 2px;
  @media screen and (min-width: 765px) {
    font-size: 52px;
  }
`;

const H4 = styled.h4`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 10px;
  color: white;
  opacity: 0.5;
  text-align: center;
  margin-left: 10px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 160px;
  background: #d87d4a;
  color: white;
  padding: 15px;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  font-family: "Manrope";
  letter-spacing: 1px;
  transition: all 0.5s ease;
  &:hover {
    background: #fbaf85;
  }
`;
