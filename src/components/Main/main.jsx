import s from './styles.module.scss'
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { useMemo, useState } from 'react';
const Main = (
    {   products, 
        handleDelete, 
        desc, 
        edit, 
        addToCart, 
        handleLogout, 
        setProduct, 
        values, 
        hendlPorduct}) => {
       
        const [sortedProducts, setSortedProducts] = useState(null);

        const handleSort = (sort) => {
            const filter = [...products]
            filter.sort((a, b) => {
                switch(sort) {
                    case 'price':
                        return b.price - a.price 
                    case 'idnone':
                        return a.id - b.id
                    case 'idnone2':
                        return b.id - a.id
                    case 'filter':
                        return filter
                }
            })
            setSortedProducts(filter)
        }
        
        return (
            <main className={s.main}>
                <div className={s.container}>
                    <div className={s.login}>
                        <div  className={s.main}>
                            <div className={s.main_search}>
                                <input  onChange={(e) => setProduct(e.target.value)}  type="text" placeholder='Введите поисковик' className={s.main_inp}/>
                                <button onClick={hendlPorduct}  className={s.main_btn}>Поиск</button>
                            </div>
                            <div className={s.sort}>
                                <h1>Сортировать по:</h1>
                                <button onClick={() => handleSort('price')}>Ценам</button>
                                <button onClick={() => handleSort('idnone')}>Сначала новые</button>
                                <button onClick={() => handleSort('idnone2')}>Сначала старые</button>
                                <button onClick={() => handleSort('filter')}>Без фильтров</button>
                            </div>
                        </div>
                        <div>
                            <ul>
                                {/* localStorage!!!!! */}
                                {localStorage.getItem('token') ? <li> <button onClick={handleLogout}>Выйти</button> </li> : <li className={s.header_login}><Link to={'/login'}>login</Link></li>}
                            </ul>
                        </div>
                    </div>
                    <ul   className={s.main__card}>
                        {(values.length > 0 ? values : sortedProducts || products).map((product) => {
                            const { id, title, description, price, image } = product;
                                return (
                                    <li className={s.card} key={id}>
                                        <img  onClick={() => desc(id)} className={s.card__img} src={image} alt=""/>
                                        <button type="button" className={s.card} onClick={() => handleDelete(id)}><DeleteOutlined /></button>
                                        <h1 className={s.title}>{title}</h1>
                                        <p className={s.price}> {price}</p>
                                        <button type="button" onClick={() => edit(id)} className={s.put__btn}>Редактировать</button>
                                        <button onClick={() => addToCart(id)} className={s.bascet__btn}> Добавить в корзину</button>
                                    </li>
                                );
                        })}
                    </ul>
                    <ul className={s.ul__post}>
                        <li className={s.post__li}> 
                            <Link to={'/post'}>Создать товар</Link>
                        </li>
                    </ul>
                </div>
            </main>
    );
    
};

export default Main;