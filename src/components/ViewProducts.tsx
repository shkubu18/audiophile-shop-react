import { data } from "../data/view-products-data";
import { IoIosArrowForward as ForwardArrow } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MenuBarInfo } from "../interfaces/MenuBarInfo";
import { useState } from "react";

export default function ViewProducts(props: MenuBarInfo) {
  const { isMenuOpen, setIsMenuOpen } = props;
  const [hovered, setHovered] = useState<string>("");
  const { pathname } = useLocation();

  const handleClick = (prop: string) => {
    if (prop === pathname) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleMouseOver = (name: string) => {
    setHovered(name);
  };

  return (
    <MainContainer>
      {data.map((product) => (
        <Container key={product.id}>
          <Link
            onMouseOver={() => handleMouseOver(product.name)}
            onMouseLeave={() => setHovered("")}
            style={{
              textDecoration: "none",
              textAlign: "center",
              width: "100%",
            }}
            onClick={() => handleClick(product.path)}
            to={product.path}
          >
            <Img src={product.img} alt={product.name} />
            <h3 style={{ fontSize: 15, marginBottom: 10, color: "black" }}>
              {product.productType}
            </h3>
            <Span
              style={{ color: hovered === product.name ? "#D87D4A" : "black" }}
            >
              SHOP
            </Span>
            <ForwardArrow style={{ color: "#D87D4A" }} />
          </Link>
        </Container>
      ))}
    </MainContainer>
  );
}

const Span = styled.span`
  font-size: 13px;
  font-weight: 700;
  opacity: 0.5;
  color: black;
  margin-right: 6px;
  transition: all 0.5s ease;
  &:hover {
    color: #d87d4a;
  }
`;

const Img = styled.img`
  height: 135px;
  margin-top: -60px;
  @media (min-width: 1100px) {
    height: 180px;
    margin-top: -100px;
  }
`;

const MainContainer = styled.div`
  @media screen and (min-width: 550px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
    margin-top: 100px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  max-height: 160px;
  background: #f1f1f1;
  border-radius: 8px;
  padding-block: 15px;
  @media (min-width: 550px) {
    width: 100%;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
