import { GoodsItem } from "./GoodsItem";
import { useContext } from "react";
import { ShopContext } from "../context";

export const GoodsList = () => {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Not found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item, index) => (
        <GoodsItem key={item.mainId + index} {...item} />
      ))}
    </div>
  );
};
