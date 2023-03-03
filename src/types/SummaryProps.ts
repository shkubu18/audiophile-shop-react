import { CartProductData } from "./Product";

export interface SummaryProps {
  cartProducts: CartProductData | any;
  totalPrice: number | null;
  shippingPrice: number;
}
