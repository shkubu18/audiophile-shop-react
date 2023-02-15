import { CartProductData } from "./Product";

export interface CheckoutProps {
  cartProducts: CartProductData | any;
  totalPrice: number | null;
  setCartProducts: React.Dispatch<any>;
}
