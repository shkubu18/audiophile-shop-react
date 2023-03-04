import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import Product from "./components/Product";
import Header from "./components/_Header/Header";
import Checkout from "./components/_Checkout/Checkout";
import { CartProductData, ProductData } from "./types/Product";
import ErrorHint from "./components/ErrorHint";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [itemCount, setItemCount] = useState<number>(1);
  const [cartItems, setCartItems] = useState<number>(0);
  const [data, setData] = useState<ProductData[]>([]);
  const [product, setProduct] = useState<string>("");
  const [cartProducts, setCartProducts] = useState<CartProductData[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  if (cartProducts[0]) {
    if (cartProducts.length === 0) {
      setCartProducts([]);
    }
  }

  useEffect(() => {
    if (cartProducts.length >= 1) {
      const total = cartProducts.reduce(
        (acc: number, product: any) =>
          acc + Number(product.price) * product.qty,
        0
      );
      setTotalPrice(total);
    }
  }, [cartProducts]);

  const addProductInCart = () => {
    if (cartProducts.length > 0) {
      let existingProduct = cartProducts.find(
        (product: any) => product.id === data[0].id
      );

      if (existingProduct) {
        existingProduct.qty = existingProduct.qty + itemCount;
        setCartProducts([...cartProducts]);

        localStorage.setItem(
          "cart_products",
          JSON.stringify([...cartProducts])
        );
      } else {
        setCartProducts([
          ...cartProducts,
          {
            id: data[0].id,
            name: data[0].name,
            price: data[0].price,
            img: data[0].img1,
            qty: itemCount,
          },
        ]);

        localStorage.setItem(
          "cart_products",
          JSON.stringify([
            ...cartProducts,
            {
              id: data[0].id,
              name: data[0].name,
              price: data[0].price,
              img: data[0].img1,
              qty: itemCount,
            },
          ])
        );
      }
    } else {
      setCartProducts([
        ...cartProducts,
        {
          id: data[0].id,
          name: data[0].name,
          price: data[0].price,
          img: data[0].img1,
          qty: itemCount,
        },
      ]);

      localStorage.setItem(
        "cart_products",
        JSON.stringify([
          ...cartProducts,
          {
            id: data[0].id,
            name: data[0].name,
            price: data[0].price,
            img: data[0].img1,
            qty: itemCount,
          },
        ])
      );
    }

    if (cartItems !== 0) {
      setCartItems(cartItems + itemCount);
      setItemCount(1);
    } else {
      setCartItems(itemCount);
      setItemCount(1);
    }
  };

  const handleDecreaseClick = () => {
    if (itemCount !== 1) {
      setItemCount(itemCount - 1);
    }
  };

  const handleIncreaseClick = () => {
    setItemCount(itemCount + 1);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cart_products");

    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cart_products");

    if (storedCartProducts?.length === 2) {
      localStorage.removeItem("cart_products");
    }
  }, [cartProducts]);

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyles />
      <Header
        handleClick={handleClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        cartItems={cartItems}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
        totalPrice={totalPrice}
      />
      <Routes>
        <Route
          path="/"
          index
          element={
            <Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        />
        <Route
          path="/headphones"
          element={
            <Headphones isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        />
        <Route
          path="/speakers"
          element={
            <Speakers isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        />
        <Route
          path="/earphones"
          element={
            <Earphones isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartProducts={cartProducts}
              totalPrice={totalPrice}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/headphones/:name"
          element={
            <Product
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleClick={handleClick}
              addProductInCart={addProductInCart}
              product={product}
              data={data}
              setData={setData}
              setProduct={setProduct}
              cartItems={cartItems}
              itemCount={itemCount}
              handleDecreaseClick={handleDecreaseClick}
              handleIncreaseClick={handleIncreaseClick}
            />
          }
        />
        <Route
          path="/speakers/:name"
          element={
            <Product
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleClick={handleClick}
              addProductInCart={addProductInCart}
              product={product}
              data={data}
              setData={setData}
              setProduct={setProduct}
              cartItems={cartItems}
              itemCount={itemCount}
              handleDecreaseClick={handleDecreaseClick}
              handleIncreaseClick={handleIncreaseClick}
            />
          }
        />
        <Route
          path="/earphones/:name"
          element={
            <Product
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              handleClick={handleClick}
              addProductInCart={addProductInCart}
              product={product}
              data={data}
              setData={setData}
              setProduct={setProduct}
              cartItems={cartItems}
              itemCount={itemCount}
              handleDecreaseClick={handleDecreaseClick}
              handleIncreaseClick={handleIncreaseClick}
            />
          }
        />
        <Route path="*" element={<ErrorHint />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    font-family: 'Manrope', sans-serif;
    position: relative;
  }
`;
