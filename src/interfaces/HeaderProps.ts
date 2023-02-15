import { CartProductData } from "./Product";

export interface HeaderProps {
  handleClick: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
  cartItems: number;
  cartProducts: CartProductData | any;
  setCartProducts: React.Dispatch<any>;
  totalPrice: number | null;
}
