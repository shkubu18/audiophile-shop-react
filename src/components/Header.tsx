import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Logo from "../assets/logo.svg";
import CartIcon from "../assets/cart/icon-cart.svg";
import CartIconBlack from "../assets/cart/icon-cart-black.svg";
import ViewProducts from "./ViewProducts";
import { HeaderProps } from "../interfaces/HeaderProps";
import { Button } from "./Headphones";
import { Background } from "../App";
import { Link } from "react-router-dom";
import { CartProductData } from "../interfaces/Product";

export default function Header(props: HeaderProps) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [totalQuantity, setTotalQuantity] = useState<number | null>(null);

  const {
    handleClick,
    isMenuOpen,
    setIsMenuOpen,
    cartProducts,
    totalPrice,
    setCartProducts,
  } = props;

  useEffect(() => {
    if (cartProducts.length >= 1) {
      const quantity = cartProducts.reduce(
        (sum: number, product: CartProductData) => sum + product.qty,
        0
      );
      setTotalQuantity(quantity);
    } else {
      setTotalQuantity(0);
    }
  }, [cartProducts]);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    cartProducts.map((product: CartProductData) => {
      if (product.qty === 0) {
        const filteredProducts = cartProducts.filter(
          (product: CartProductData) => product.qty > 0
        );
        setCartProducts(filteredProducts);
      }
    });
  }, [totalQuantity]);

  const handleIncreaseQty = (id: number) => {
    setCartProducts((prevProducts: CartProductData | any) =>
      prevProducts.map((product: CartProductData) =>
        product.id === id ? { ...product, qty: product.qty + 1 } : product
      )
    );
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
  };

  const deleteAllProduct = () => {
    setCartProducts([]);
  };

  const hideBackground = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <HeaderContainer>
        <header>
          <MenuBar>
            {isMenuOpen ? (
              <HiXMark style={{ fontSize: 22 }} onClick={handleClick} />
            ) : (
              <FaBars style={{ height: "100%" }} onClick={handleClick} />
            )}
          </MenuBar>
          <Link style={{ display: "flex", alignItems: "center" }} to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <Navbar>
            <Link
              to="/"
              style={{
                marginRight: 30,
                color: "white",
                textDecoration: "none",
              }}
            >
              HOME
            </Link>
            <Link
              to="/headphones"
              style={{
                marginRight: 30,
                color: "white",
                textDecoration: "none",
              }}
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              style={{
                marginRight: 30,
                color: "white",
                textDecoration: "none",
              }}
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              style={{ color: "white", textDecoration: "none" }}
            >
              EARPHONES
            </Link>
          </Navbar>
          <CartIconContainer onClick={handleShowCart}>
            <img src={CartIcon} alt="cartIcon" />
            {totalQuantity ? (
              <ItemQuantity>{totalQuantity}</ItemQuantity>
            ) : null}
          </CartIconContainer>
        </header>
      </HeaderContainer>
      {showCart && cartProducts.length > 0 ? (
        <CartContainer>
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
                <Link
                  onClick={hideBackground}
                  style={{ width: "100%" }}
                  to="/checkout"
                >
                  <Button style={{ width: "100%" }}>CHECKOUT</Button>
                </Link>
              </div>
            </div>
          </Cart>
        </CartContainer>
      ) : showCart && cartProducts <= 0 ? (
        <EmptyCartContainer>
          <EmptyCart>
            <EmprtyCartHint>Your cart is empty</EmprtyCartHint>
            <img style={{ height: 60 }} src={CartIconBlack} alt="cartIcon" />
          </EmptyCart>
        </EmptyCartContainer>
      ) : null}
      {isMenuOpen ? (
        <MenuContainer>
          <div style={{ paddingInline: isMenuOpen ? 25 : 0 }}>
            <ViewProducts
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </MenuContainer>
      ) : null}

      {showCart ? <Background onClick={hideBackground} /> : null}
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

const MenuBar = styled.div`
  @media (min-width: 1100px) {
    display: none;
  }
`;

const Navbar = styled.nav`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    a {
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 2px;
      transition: all 0.5s ease;
      &:hover {
        color: #d87d4a !important;
      }
    }
  }
`;

const EmprtyCartHint = styled.span`
  margin-bottom: 25px;
  opacity: 0.5;
  font-weight: 600;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 30px;
  border-radius: 8px;
  position: absolute;
  background-color: white;
  width: 320px;
  margin-top: 20px;
  z-index: 99;
`;

const EmptyCartContainer = styled.div`
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
  width: 320px;
  background-color: white;
  @media screen and (max-width: 370px) {
    width: 280px;
    padding-inline: 18px;
  }
  @media (min-width: 765px) {
    width: 370px;
  }

  @media (min-width: 1100px) {
    top: 110px;
  }
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  @media (min-width: 765px) {
    justify-content: flex-end;
    margin-right: 50px;
  }

  @media (min-width: 1100px) {
    width: 1100px;
    margin: auto;
  }
`;

const ItemQuantity = styled.span`
  background: #d87d4a;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: absolute;
  top: -10px;
  left: 13px;
`;

const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 10;
  background-color: white;
  padding-bottom: 50px;
  width: 100%;
  z-index: 20;
  border-radius: 0px 0px 8px 8px;
`;

const HeaderContainer = styled.div`
  color: white;
  padding: 25px;
  display: flex;
  justify-content: center;
  background-color: #191919;
  @media (min-width: 1100px) {
    margin-bottom: -2px;
    padding: 0;
    padding-top: 25px;
  }
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (min-width: 1100px) {
      max-width: 1100px !important;
      padding-bottom: 30px;
      padding-top: 10px;
      border-bottom: 1px solid #ffffff2b;
    }
  }
`;
