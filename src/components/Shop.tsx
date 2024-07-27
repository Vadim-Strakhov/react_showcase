import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import { IShop } from "../types";

export const Shop = () => {
  const { loading, setGoods, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.shop.filter((item) => !item.mainId.startsWith("SID")));
        data.shop &&
          setGoods(
            data.shop
              .filter((item: IShop) => !item.mainId.startsWith("SID"))
              .slice(20, 36)
          );
      });
  }, []);

  return (
    <main className="container content">
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};
