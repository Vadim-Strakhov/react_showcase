import { useContext } from 'react';
import { ShopContext } from '../context';

export const Cart = (props) => {
	// const { quantity = 0, handleBasketShow = Function.prototype } = props;
	const { order, handleBasketShow = Function.prototype } = useContext(ShopContext);

	const quantity = order.length;

	return (
		<div
			className='cart blue darken-4 white-text'
			onClick={handleBasketShow}
		>
			<i className='material-icons'>shopping_cart</i>
			{quantity ? <span className='cart_quantity'>{quantity}</span> : null}
		</div>
	);
};
