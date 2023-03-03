import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductProps } from "../types/ProductProps";
import { Name } from "./Headphones";
import { Description } from "./Headphones";
import { Button } from "./Headphones";
import HomeAbout from "./HomeAbout";
import SuggestProducts from "./SuggestProducts";
import ViewProducts from "./ViewProducts";
import {
  ProductDetailInfo,
  productsDetailInfo,
} from "../data/products-detail-info";

export default function Product(props: ProductProps) {
  const [isUrlChanged, setIsUrlChanged] = useState<boolean>(false);
  const [isProductExists, setIsProductExists] = useState<boolean>(true);

  const {
    isMenuOpen,
    setIsMenuOpen,
    handleDecreaseClick,
    handleIncreaseClick,
    addProductInCart,
    product,
    setProduct,
    data,
    setData,
    itemCount,
  } = props;

  const handleUrl = () => {
    setIsUrlChanged(!isUrlChanged);
  };

  useEffect(() => {
    let requestedProduct = window.location.pathname.split("/").pop();
    if (requestedProduct) {
      const product = productsDetailInfo.find(
        (product: ProductDetailInfo[] | any) =>
          product.hasOwnProperty(requestedProduct)
      );
      if (product) {
        const productKeys = Object.keys(product);
        if (productKeys.includes(requestedProduct)) {
          const renderedProduct = product[requestedProduct];
          setData(renderedProduct);
          setProduct(renderedProduct[0].name);
          setIsProductExists(true);
        }
      } else {
        setIsProductExists(false);
        setData([]);
        setProduct("");
      }
    }
  }, [isUrlChanged]);

  const handleGoBack = () => {
    window.history.back();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <Container>
      {!data ? <span>...Loading</span> : null}

      <GoBackContainer>
        <span onClick={handleGoBack}>Go Back</span>
      </GoBackContainer>

      {!isProductExists ? <ErrorHint>Product not found.</ErrorHint> : null}

      {data &&
        data.map((item: any) => (
          <ProductContainer key={0}>
            <DescriptionContainer>
              <Div>
                {window.innerWidth <= 765 ? (
                  <img
                    style={{
                      width: "100%",
                      borderRadius: 8,
                      marginBottom: 30,
                    }}
                    src={item.img1}
                  />
                ) : window.innerWidth >= 1100 ? (
                  <img
                    style={{
                      width: 540,
                      height: 560,
                      borderRadius: 8,
                      marginBottom: 40,
                      objectFit: "cover",
                    }}
                    src={item.img1}
                  />
                ) : (
                  <img
                    style={{
                      height: 480,
                      borderRadius: 8,
                    }}
                    src={item.img5}
                  />
                )}
                <ProductInfo>
                  {item.hint ? <Hint>{item.hint}</Hint> : null}

                  <Name style={{ marginTop: 20, fontSize: 28 }}>
                    {item.name} <br /> {item.productType}
                  </Name>
                  <Description>{item.description}</Description>

                  <h3>${Number(item.price).toLocaleString()}</h3>

                  <AddProductContainer>
                    <ProductQty>
                      <QtyButton onClick={handleDecreaseClick}>-</QtyButton>
                      <span style={{ marginInline: 10, fontWeight: 700 }}>
                        {itemCount}
                      </span>
                      <QtyButton onClick={handleIncreaseClick}>+</QtyButton>
                    </ProductQty>
                    <Button
                      onClick={addProductInCart}
                      style={{ marginRight: 25 }}
                    >
                      ADD TO CART
                    </Button>
                  </AddProductContainer>
                </ProductInfo>
              </Div>
              <MoreInfoContainer>
                <FeaturesContainer>
                  <h1
                    style={{
                      fontSize: 24,
                      letterSpacing: 0.8,
                      marginBottom: 20,
                    }}
                  >
                    FEATURES
                  </h1>
                  <p style={{ opacity: 0.5, fontWeight: 500, fontSize: 15 }}>
                    {item.features1}
                  </p>
                  <br />
                  <p style={{ opacity: 0.5, fontWeight: 500, fontSize: 15 }}>
                    {item.features1}
                  </p>
                </FeaturesContainer>

                <InTheBoxContainer>
                  <h1 style={{ fontSize: 24, letterSpacing: 0.8 }}>
                    IN THE BOX
                  </h1>
                  <Items>
                    <div style={{ marginBottom: 12, marginTop: 10 }}>
                      <Quantity>{item.inTheBox.item1Qty}</Quantity>{" "}
                      <span style={{ opacity: 0.5 }}>
                        {item.inTheBox.item1}
                      </span>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <Quantity>{item.inTheBox.item2Qty}</Quantity>{" "}
                      <span style={{ opacity: 0.5 }}>
                        {item.inTheBox.item2}
                      </span>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <Quantity>{item.inTheBox.item3Qty}</Quantity>{" "}
                      <span style={{ opacity: 0.5 }}>
                        {item.inTheBox.item3}
                      </span>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                      <Quantity>{item.inTheBox.item4Qty}</Quantity>{" "}
                      <span style={{ opacity: 0.5 }}>
                        {item.inTheBox.item4}
                      </span>
                    </div>
                    {item.inTheBox.item5 ? (
                      <div>
                        <Quantity>{item.inTheBox.item5Qty}</Quantity>{" "}
                        <span style={{ opacity: 0.5 }}>
                          {item.inTheBox.item5}
                        </span>
                      </div>
                    ) : null}
                  </Items>
                </InTheBoxContainer>
              </MoreInfoContainer>
            </DescriptionContainer>
            <ImagesContainer>
              <FirstAndSecondImages>
                <ProductImg style={{ marginBottom: 18 }} src={item.img2} />
                <ProductImg
                  className="second"
                  style={{ marginBottom: 18 }}
                  src={item.img3}
                />
              </FirstAndSecondImages>
              <ProductImgLast src={item.img4} />
            </ImagesContainer>
          </ProductContainer>
        ))}
      <SuggestProducts productName={product} handleClick={handleUrl} />
      <ViewProducts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HomeAbout />
    </Container>
  );
}

const ErrorHint = styled.p`
  margin-inline: 30px;
  font-size: 30px;
  margin-block: 50px;
  color: #cd2c2c;
  text-align: center;
`;

const FirstAndSecondImages = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 765px) {
    flex-direction: column;
    margin-right: 20px;
    width: 75%;
    .second {
      margin: 0 !important;
    }
  }

  @media (min-width: 1100px) {
    width: unset;
  }
`;

const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 100px;
  }
`;

const Div = styled.div`
  width: 100%;
  @media (min-width: 765px) {
    display: flex;
    align-items: center;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  @media (min-width: 765px) {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1100px) {
    margin-left: 100px;
  }
`;

const ProductImgLast = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  height: 380px;
  @media (min-width: 765px) {
    height: 100%;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  @media (min-width: 765px) {
    height: 50%;
  }
`;

const Quantity = styled.span`
  color: #d87d4a;
  margin-right: 10px;
  font-weight: 700;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
`;

const InTheBoxContainer = styled.div`
  margin-bottom: 80px;

  @media (min-width: 765px) {
    h1 {
      font-size: 32px !important;
    }
  }

  @media (min-width: 1100px) {
    margin: 0;
  }
`;

const FeaturesContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 45px;
  @media (min-width: 765px) {
    h1 {
      font-size: 32px !important;
    }
    margin-bottom: 70px;
  }

  @media (min-width: 1100px) {
    max-width: 640px;
  }
`;

export const QtyButton = styled.button`
  border: none;
  font-family: "Manrope", sans-serif;
  height: 100%;
  width: 100%;
  font-weight: 700;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transition: all 0.5s ease;
    color: #d87d4a;
    cursor: pointer;
  }
`;

const ProductQty = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f1f1f1;
  margin-right: 10px;
`;

const AddProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

const Hint = styled.span`
  color: #d87d4a;
  letter-spacing: 10px;
  font-size: 14px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const GoBackContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-block: 30px;
  span {
    cursor: pointer;
    opacity: 0.5;
    &:hover {
      transition: all 0.5s ease;
      color: #d87d4a;
    }
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  margin-inline: 25px;
  min-height: calc(100vh - 62px + 602px);
  @media (min-width: 1100px) {
    margin: 0;
    max-width: 1100px;
    margin: auto;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  @media (min-width: 765px) {
    flex-direction: row;
    height: 410px;
    width: 100%;
  }

  @media (min-width: 1100px) {
    height: 600px;
    margin-bottom: 150px;
  }
`;
