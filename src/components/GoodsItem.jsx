import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context";

export const GoodsItem = (props) => {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;
  const { addToBasket } = useContext(ShopContext);

  const finalPrice = price.finalPrice;
  const background = displayAssets[0].full_background;

  return (
    <div className="card">
      <div className="card-image">
        <img src={background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ mainId, displayName, finalPrice })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {finalPrice} руб
        </span>
      </div>
    </div>
  );
};
