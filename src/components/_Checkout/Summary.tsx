import styled from "styled-components";
import { SummaryProps } from "../../types/SummaryProps";
import { Price, ProductName } from "../CartContainer";
import { Products } from "./Checkout";
import { Button } from "../Headphones";

export default function Summary(props: SummaryProps) {
  const { cartProducts, totalPrice, shippingPrice } = props;

  return (
    <>
      {cartProducts.length > 0 ? (
        <ProductInfo>
          <div
            style={{
              marginBlock: 30,
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <h3 style={{ letterSpacing: 1 }}>SUMMARY</h3>
          </div>
          {cartProducts.map((product: any) => (
            <Products key={product.id}>
              <div style={{ width: "100%", display: "flex" }}>
                <img
                  style={{
                    height: 65,
                    width: 65,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                  src={product.img}
                  alt={product.name}
                />
                <div style={{ marginLeft: 15 }}>
                  <ProductName>{product.name}</ProductName>
                  <Price>${Number(product.price).toLocaleString()}</Price>
                </div>
              </div>
              <span style={{ opacity: 0.5, fontWeight: 700 }}>
                x{product.qty}
              </span>
            </Products>
          ))}
          <PriceInfo style={{ marginTop: 20 }}>
            <Span>TOTAL</Span>
            <h3 style={{ margin: 0 }}>${totalPrice?.toLocaleString()}</h3>
          </PriceInfo>
          <PriceInfo>
            <Span>SHIPPING</Span>
            <h3 style={{ margin: 0 }}>${shippingPrice}</h3>
          </PriceInfo>
          <PriceInfo>
            <Span>VAT (INCLUDED)</Span>
            {totalPrice ? (
              <h3 style={{ margin: 0 }}>
                $
                {Math.floor(
                  (totalPrice + shippingPrice) * 0.2
                ).toLocaleString()}
              </h3>
            ) : null}
          </PriceInfo>
          <PriceInfo style={{ marginTop: 30 }}>
            <Span>GRAND TOTAL</Span>
            {totalPrice ? (
              <h3 style={{ margin: 0, color: "#D87D4A" }}>
                ${(totalPrice + shippingPrice).toLocaleString()}
              </h3>
            ) : null}
          </PriceInfo>
          <Button
            form="form"
            type="submit"
            style={{ marginTop: 30, width: "100%" }}
          >
            CONTINUE & PAY
          </Button>
        </ProductInfo>
      ) : (
        <WarningMessage>
          <p style={{ color: "#f0d01d" }}>
            There are no products in the cart... Please add product!
          </p>
        </WarningMessage>
      )}
    </>
  );
}

const WarningMessage = styled.div`
  padding-inline: 24px;
  padding-block: 5px;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  @media (min-width: 1100px) {
    margin-top: 50px;
    height: 100%;
    margin-left: 20px;
  }
`;

const Span = styled.span`
  opacity: 0.5;
`;

const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 25px;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 30px;
  @media (min-width: 1100px) {
    width: 35%;
    margin: 0;
    margin-top: 50px;
    margin-left: 20px;
    height: 100%;
  }
`;
