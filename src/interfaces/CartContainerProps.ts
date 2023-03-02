import { CartProductData } from "../interfaces/Product";

export interface CartContainerProps {
  cartProducts: CartProductData | any;
  setCartProducts: React.Dispatch<any>;
  hideBackground: () => void;
  totalPrice: number | null;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
