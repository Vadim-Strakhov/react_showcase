import React from 'react';
import { GoodsItem } from './GoodsItem';
import { useContext } from 'react';
import { ShopContext } from '../context';

export const GoodsList = (props) => {
  // const { goods = [], addToBasket = Function.prototype } = props;
  // const { goods = [] } = props;
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Not found</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item, index) => (
        <GoodsItem
          key={item.mainId}
          {...item}
          // addToBasket={addToBasket}
        />
      ))}
    </div>
  );
};
