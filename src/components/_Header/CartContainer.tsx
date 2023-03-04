import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Headphones";
import { CartProductData } from "../../types/Product";
import { CartContainerProps } from "../../types/CartContainerProps";

export default function CartContainer(props: CartContainerProps) {
  const { cartProducts, setCartProducts, totalPrice, hideBackground } = props;

  const handleIncreaseQty = (id: number) => {
    setCartProducts((prevProducts: CartProductData | any) =>
      prevProducts.map((product: CartProductData) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      )
    );

    const updatedCartProducts = cartProducts.map((product: CartProductData) =>
      product.id === id ? { ...product, qty: product.qty + 1 } : product
    );
    localStorage.setItem("cart_products", JSON.stringify(updatedCartProducts));
  };

  const handleDecreaseQty = (id: number) => {
    setCartProducts((prevProducts: CartProductData | any) =>
      prevProducts.map((product: CartProductData) => {
        if (product.id === id) {
          return { ...product, qty: product.qty - 1 };
        } else {
          return product;
        }
      })
    );

    const updatedCartProducts = cartProducts.map((product: CartProductData) =>
      product.id === id ? { ...product, qty: product.qty - 1 } : product
    );
    localStorage.setItem("cart_products", JSON.stringify(updatedCartProducts));
  };

  const deleteAllProduct = () => {
    setCartProducts([]);
    localStorage.removeItem("cart_products");
  };

  return (
    <>
      <Container>
        <Cart>
          <CartHeader>
            <h3>CART ({cartProducts.length})</h3>
            <span onClick={deleteAllProduct}>Remove all</span>
          </CartHeader>
          <div
            style={{
              width: "100%",
            }}
          >
            {cartProducts.map((product: any) => (
              <div key={product.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBlock: 22,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{
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
                  <AddProductContainer>
                    <ProductQty>
                      <span
                        className="plus-minus"
                        onClick={() => handleDecreaseQty(product.id)}
                      >
                        -
                      </span>
                      <span>{product.qty}</span>
                      <span
                        className="plus-minus"
                        onClick={() => handleIncreaseQty(product.id)}
                      >
                        +
                      </span>
                    </ProductQty>
                  </AddProductContainer>
                </div>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <span style={{ opacity: 0.5 }}>TOTAL</span>
              <h3>${Number(totalPrice).toLocaleString()}</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <NavLink
                onClick={hideBackground}
                style={{ width: "100%" }}
                to="/checkout"
              >
                <Button style={{ width: "100%" }}>CHECKOUT</Button>
              </NavLink>
            </div>
          </div>
        </Cart>
      </Container>
    </>
  );
}

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    opacity: 0.5;
    text-decoration: underline;
    font-weight: 500;
    &:hover {
      transition: all 0.5s ease;
      color: #d87d4a;
      cursor: pointer;
    }
  }
`;

export const ProductName = styled.h3`
  margin: 0;
  font-size: 15px;
`;

export const Price = styled.h3`
  margin: 0;
  font-size: 14px;
  opacity: 0.5;
`;

const ProductQty = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f1f1f1;
  .plus-minus {
    &:hover {
      cursor: pointer;
      transition: all 0.5s ease;
      color: #d87d4a;
    }
  }
`;

const AddProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 15px;
  margin-left: 10px;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 25px;
  position: absolute;
  z-index: 99;
  width: 330px;
  top: 100px;
  background-color: white;
  @media (max-width: 340px) {
    width: 300px;
    padding-inline: 18px;
  }
  @media (min-width: 765px) {
    width: 370px;
  }

  @media (min-width: 1100px) {
    top: 110px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 765px) {
    justify-content: flex-end;
    margin-right: 50px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
  }
`;
