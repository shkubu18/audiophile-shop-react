import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/cart/icon-cart.svg";
import CartIconBlack from "../../assets/cart/icon-cart-black.svg";
import ViewProducts from "../ViewProducts";
import { HeaderProps } from "../../types/HeaderProps";
import { NavLink } from "react-router-dom";
import { CartProductData } from "../../types/Product";
import CartContainer from "./CartContainer";

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
        localStorage.setItem("cart_products", JSON.stringify(filteredProducts));
      }
    });
  }, [totalQuantity]);

  const hideBackground = () => {
    setShowCart(!showCart);
  };

  let activeStyle = {
    color: "#d87d4a",
  };

  return (
    <>
      <HeaderContainer>
        <header>
          <MenuBar>
            {isMenuOpen ? (
              <HiXMark
                style={{ height: "100%", width: "100%" }}
                onClick={handleClick}
              />
            ) : (
              <FaBars style={{ height: "100%" }} onClick={handleClick} />
            )}
          </MenuBar>
          <NavLink style={{ display: "flex", alignItems: "center" }} to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <Navbar>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/headphones"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HEADPHONES
            </NavLink>
            <NavLink
              to="/speakers"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SPEAKERS
            </NavLink>
            <NavLink
              to="/earphones"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              EARPHONES
            </NavLink>
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
        <CartContainer
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          hideBackground={hideBackground}
          totalPrice={totalPrice}
          showCart={showCart}
          setShowCart={setShowCart}
        />
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
      {isMenuOpen ? <Background /> : null}
    </>
  );
}

export const Background = styled.div`
  height: calc(100% - 91px);
  width: 100%;
  background: #00000080;
  position: absolute;
  z-index: 10;
`;

const MenuBar = styled.div`
  width: 20px;
  height: 22px;
  @media (min-width: 1100px) {
    display: none;
  }
`;

const Navbar = styled.nav`
  display: none;
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-between;
    width: 440px;
    a {
      font-weight: 500;
      font-size: 13px;
      letter-spacing: 2px;
      color: white;
      text-decoration: none;
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
  background-color: white;
  padding-bottom: 50px;
  width: 100%;
  z-index: 100;
  border-radius: 0px 0px 8px 8px;
`;

const HeaderContainer = styled.div`
  color: white;
  padding: 25px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ffffff2b;
  background-color: #191919;
  @media (min-width: 1120px) {
    margin-bottom: -2px;
    padding: 0;
    padding-top: 25px;
    border: none;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (min-width: 1120px) {
      max-width: 1100px !important;
      padding-bottom: 30px;
      padding-top: 10px;
      border-bottom: 1px solid #ffffff2b;
    }
  }
`;
