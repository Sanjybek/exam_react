import React from 'react';
import s from './styles.module.scss'
const Basket = ({data, delet, deletBascet}) => {
  
  return (
      <section className={s.bascket}>
        <div className={s.container}>
          <div className={s.bascetCard}>
            <h1 className={s.bascetCard__title}>Корзина</h1>
            <div className={s.btn__end}>
                <button onClick={() => deletBascet()} className={s.btn}>Очистить корзину</button>
            </div>
            <ul className={s.card__ul}>
              {data.map((i) => {
                  const {title, price, image, id} = i
                  return (
                    <li className={s.card} key={id}> 
                      <img className={s.card__img} src={image}  alt="" />
                      <h1>{title}</h1>
                      <p>{price}</p>
                      <button className={s.btn} onClick={() => delet(id)}>Удалить из корзины</button>
                    </li> 
                  )
              })
              }
            </ul>
          </div>
        </div>
      </section>
  );
};

export default Basket;