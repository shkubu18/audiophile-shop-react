export interface ProductProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: React.SetStateAction<boolean>) => void;
  handleDecreaseClick: () => void;
  handleIncreaseClick: () => void;
  cartItems: number;
  itemCount: number;
  addProductInCart: () => void;
  handleClick: () => void;
  data: any;
  setData: React.Dispatch<any>;
  product: string;
  setProduct: React.Dispatch<React.SetStateAction<string>>;
}
