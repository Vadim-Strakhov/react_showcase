import { createContext, FC, useReducer } from "react";
import { reducer } from "./reducer";
import { Action, ContextProviderProps, ShopContextState } from "./types";

export const ShopContext = createContext<ShopContextState>(
  {} as ShopContextState
);

const initialState: ShopContextState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
  closeAlert: () => {},
  addToBasket: () => {},
  incQuantity: () => {},
  decQuantity: () => {},
  removeFromBasket: () => {},
  handleBasketShow: () => {},
  setGoods: () => {},
};

type StateAndDispatch = [ShopContextState, React.Dispatch<Action>];

export const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [value, dispatch] = useReducer(
    reducer,
    initialState
  ) as StateAndDispatch;

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id: itemId } });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemId } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "TOGGLE_BASKET" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
