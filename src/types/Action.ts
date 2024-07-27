import { BasketItems } from "./BasketItems";

export type Action =
  | { type: "SET_GOODS"; payload: BasketItems[] }
  | { type: "ADD_TO_BASKET"; payload: BasketItems }
  | { type: "REMOVE_FROM_BASKET"; payload: { id: number } }
  | { type: "INCREMENT_QUANTITY"; payload: { id: number } }
  | { type: "DECREMENT_QUANTITY"; payload: { id: number } }
  | { type: "CLOSE_ALERT" }
  | { type: "TOGGLE_BASKET" };
