import { Action, ShopContextState } from "./types";

export const reducer = (state: ShopContextState, action: Action) => {
  switch (action.type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: action.payload || [],
        loading: false,
      };
    case "ADD_TO_BASKET":
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === action.payload.mainId
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity! + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: action.payload.displayName,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== action.payload.id),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === action.payload.id) {
            const newQuantity = el.quantity! + 1;
            return {
              ...el,
              quantity: newQuantity,
            };
          } else {
            return el;
          }
        }),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId === action.payload.id) {
            const newQuantity = el.quantity! - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return el;
          }
        }),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    default:
      return state;
  }
};
