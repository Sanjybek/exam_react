import React from 'react';
import {Link} from "react-router-dom";
import s from './styles.module.scss'
const Header = () => {
    return (
            <header className={s.headers}>
                <div className={s.container}>
                    <div className={s.header}>
                        <ul className={s.header_flex}>
                            <li>
                                <Link to={'/'}>
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link to={'/'}>
                                    Контакты
                                </Link>                    
                            </li>
                            <li>
                                <Link to={'/bascket'}>
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
    );
};

export default Header;