import { BasketItems } from "./BasketItems";

export interface ShopContextState {
  goods: BasketItems[];
  loading: boolean;
  order: BasketItems[];
  isBasketShow: boolean;
  alertName: string;
  closeAlert: () => void;
  addToBasket: (item: BasketItems) => void;
  incQuantity: (itemId: number) => void;
  decQuantity: (itemId: number) => void;
  removeFromBasket: (itemId: number) => void;
  handleBasketShow: () => void;
  setGoods: (data: BasketItems[]) => void;
}
