import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

export const Alert = (props) => {
  // const { name = '', closeAlert = Function.prototype } = props;
  const { alertName: displayName = '', closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 2000);

    return () => {
      clearTimeout(timerId);
    };
    /* eslint-disable */
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{displayName} добавлен в корзину</div>
    </div>
  );
};
