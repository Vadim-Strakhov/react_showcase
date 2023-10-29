import React from 'react';

export const GoodsItem = (props) => {
    const {
        mainId,
        displayName,
        displayDescription,
        displayAssets,
        price,
        addToBasket = Function.prototype,
    } = props;

    const finalPrice = price.finalPrice;
    const full_background = displayAssets[0].full_background;

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={full_background}
                    alt={displayName}
                />
            </div>
            <div className='card-content'>
                <span className='card-title'>{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() =>
                        addToBasket({ mainId, displayName, finalPrice })
                    }
                >
                    Купить
                </button>
                <span
                    className='right'
                    style={{ fontSize: '1.8rem' }}
                >
                    {finalPrice} руб
                </span>
            </div>
        </div>
    );
};
