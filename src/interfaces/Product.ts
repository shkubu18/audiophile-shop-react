export interface ProductData {
  description: string;
  feautures1: string;
  feautures2: string;
  hint?: string;
  id: number;
  name: string;
  price: string;
  img: string;
  qty: number;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  productType: string;
  inTheBox: {
    item1: string;
    item1Qty: string;
    item2: string;
    item2Qty: string;
    item3: string;
    item3Qty: string;
    item4: string;
    item4Qty: string;
    item5?: string;
    item5Qty?: string;
  };
}

export interface CartProductData {
  id: number;
  img: string;
  price: string;
  name: string;
  qty: number;
}
