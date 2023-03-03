import styled from "styled-components";
import { useState, useEffect } from "react";
import { allProduct } from "../data/all-product";
import { Button } from "./Headphones";
import { Link } from "react-router-dom";
import { SuggestProductsProps } from "../types/SuggestProductsProps";

export default function SuggestProducts(props: SuggestProductsProps) {
  const [suggestProducts, setSuggestProducts] = useState<
    SuggestProductsProps[] | any
  >([]);

  const { productName, handleClick } = props;

  useEffect(() => {
    if (productName === "XX99 MARK ||") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "XX99 MARK |" ||
          product.name === "XX59" ||
          product.name === "ZX9"
      );
      setSuggestProducts(suggested);
    } else if (productName === "XX99 MARK |") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "XX99 MARK ||" ||
          product.name === "XX59" ||
          product.name === "ZX9"
      );
      setSuggestProducts(suggested);
    } else if (productName === "XX59") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "XX99 MARK ||" ||
          product.name === "XX99 MARK |" ||
          product.name === "ZX9"
      );
      setSuggestProducts(suggested);
    } else if (productName === "ZX9") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "ZX7" ||
          product.name === "XX99 MARK |" ||
          product.name === "XX59"
      );
      setSuggestProducts(suggested.reverse());
    } else if (productName === "ZX7") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "ZX9" ||
          product.name === "XX99 MARK |" ||
          product.name === "XX59"
      );
      setSuggestProducts(suggested.reverse());
    } else if (productName === "YX1 WIRELESS") {
      const suggested = allProduct.filter(
        (product) =>
          product.name === "XX99 MARK |" ||
          product.name === "XX59" ||
          product.name === "ZX9"
      );
      setSuggestProducts(suggested);
    } else {
      setSuggestProducts(null);
    }
  }, [productName]);

  return (
    <>
      <SuggestTitle>YOU MAY ALSO LIKE</SuggestTitle>
      <Container>
        {suggestProducts ? (
          suggestProducts.map((product: any) => (
            <SuggestProduct key={product.id}>
              {window.innerWidth <= 765 ? (
                <Img src={product.img} alt={product.name} />
              ) : (
                <Img src={product.img2} alt={product.name} />
              )}
              <h2 style={{ marginBlock: 30 }}>{product.name}</h2>
              <Link to={product.path}>
                <Button onClick={handleClick}>SEE PRODUCT</Button>
              </Link>
            </SuggestProduct>
          ))
        ) : (
          <div style={{ width: "100%", textAlign: "center" }}>...Loading</div>
        )}
      </Container>
    </>
  );
}

const Img = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  @media (min-width: 765px) {
    width: 230px;
    height: 318px;
  }
  @media (min-width: 1050px) {
    width: 320px;
  }
`;

const SuggestProduct = styled.div`
  width: 100%;
  margin-bottom: 60px;
`;

const SuggestTitle = styled.h1`
  font-size: 24px;
  letter-spacing: 0.8px;
  margin-bottom: 35px;
  text-align: center;
  @media (min-width: 765px) {
    font-size: 32px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 765px) {
    flex-direction: row;
    margin-bottom: 50px;
  }
`;
