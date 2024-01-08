import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss'
const Description = ({product}) => {
    return (
           <section>
                <div className={s.container} >
                        <div  className={s.info} >
                            <ul className={s.ul}> 
                                <li className={s.main}><Link to={'/'}>Вернуться</Link></li>    
                                <h1 className={s.info__title} >{product.title}</h1>
                                <li className={s.info__card} key={product.id}>
                                    <div className={s.info__div}>
                                        <img className={s.info__image} src={product.image} alt="" />
                                    </div>
                                    <div className={s.description}>
                                        <p className={s.info__desc}><span className={s.desc}>Описание</span> <br /> <br/>{product.description}</p>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                </div>
           </section>
    );
};

export default Description;