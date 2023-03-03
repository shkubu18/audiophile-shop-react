import styled from "styled-components";
import OrderConfirmationImg from "../assets/checkout/icon-order-confirmation.svg";
import { Products } from "./Checkout";
import { Price, ProductName } from "./CartContainer";
import { Link } from "react-router-dom";
import { Button } from "./Headphones";
import { OrderProps } from "../types/OrderProps";

export default function Order(props: OrderProps) {
  const { cartProducts, totalPrice, shippingPrice, setCartProducts } = props;

  const [firstProduct, ...otherProducts] = cartProducts;

  const goBackHome = () => {
    setCartProducts([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <OrderConfirmation>
        <div>
          <img src={OrderConfirmationImg} alt="icon-order-confirmation" />
          <h2
            style={{
              letterSpacing: 0.8,
              lineHeight: 1.15,
              marginBlock: 20,
            }}
          >
            THANK YOU FOR YOUR ORDER
          </h2>
          <p style={{ opacity: 0.5 }}>
            You will receive an email confirmation shortly.
          </p>
        </div>
        <Info>
          <OrderedProducts>
            <Products style={{ margin: 0 }}>
              <div style={{ width: "100%", display: "flex" }}>
                <img
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                  src={firstProduct.img}
                  alt={firstProduct.name}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    paddingBlock: 7,
                  }}
                >
                  <ProductName>{firstProduct.name}</ProductName>
                  <Price>${Number(firstProduct.price).toLocaleString()}</Price>
                </div>
              </div>
              <span style={{ opacity: 0.5, fontWeight: 700, marginLeft: 10 }}>
                x{firstProduct.qty}
              </span>
            </Products>
            <OtherProducts>
              {otherProducts.length > 0 ? (
                <OtherProductsInfo>
                  and {otherProducts.length} other items(s)
                </OtherProductsInfo>
              ) : null}
            </OtherProducts>
          </OrderedProducts>
          <OrderConfirmationTotal>
            <span style={{ opacity: 0.5, marginBottom: 10, fontWeight: 300 }}>
              GRAND TOTAL
            </span>
            {totalPrice ? (
              <h3 style={{ margin: 0, marginTop: 10 }}>
                ${(totalPrice + shippingPrice).toLocaleString()}
              </h3>
            ) : null}
          </OrderConfirmationTotal>
        </Info>
        <Link to="/">
          <Button onClick={goBackHome} style={{ width: "100%" }}>
            BACK TO HOME
          </Button>
        </Link>
      </OrderConfirmation>
    </div>
  );
}

const OrderConfirmationTotal = styled.div`
  background-color: black;
  color: white;
  border-radius: 0 0 8px 8px;
  padding: 25px;
`;

const OtherProductsInfo = styled.span`
  opacity: 0.5;
  font-size: 13px;
  font-weight: 700;
`;

const OtherProducts = styled.div`
  text-align: center;
  border-top: 1px solid #d4d4d4;
  margin-top: 10px;
  padding-top: 10px;
`;

const OrderedProducts = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  padding: 25px;
`;

const Info = styled.div`
  margin-block: 25px;
`;

const OrderConfirmation = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  margin-top: 50px;
  margin-inline: 25px;
  width: 550px;
`;
