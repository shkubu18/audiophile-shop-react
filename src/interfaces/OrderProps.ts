import { CartProductData } from "../interfaces/Product";

export interface OrderProps {
  cartProducts: CartProductData | any;
  totalPrice: number | null;
  shippingPrice: number;
  setCartProducts: React.Dispatch<any>;
}
