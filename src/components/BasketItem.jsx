export const BasketItem = (props) => {
	const {
		mainId,
		displayName,
		finalPrice,
		quantity,
		removeFromBasket = Function.prototype,
		incQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props;

	return (
		<li className='collection-item'>
			<p>{displayName}</p>
			<i
				className='material-icons basket-quantity remove'
				onClick={() => decQuantity(mainId)}
			>
				remove
			</i>{' '}
			x{quantity} = {finalPrice * quantity} руб.{' '}
			<i
				className='material-icons basket-quantity add'
				onClick={() => incQuantity(mainId)}
			>
				add
			</i>
			<span
				className='secondary-content'
				onClick={() => removeFromBasket(mainId)}
			>
				<i className='material-icons basket-delete'>close</i>
			</span>
		</li>
	);
};
