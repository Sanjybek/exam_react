import React, { useEffect, useState } from 'react';
import Main from '../../components/Main/main';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, getProduct } from '../../store/Product/actions';
import { useNavigate } from 'react-router-dom';
const MainContainer = ({put}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isLoad, error, products} = useSelector((state) => state.postsReducer) 

    useEffect(() => {
        dispatch(getProduct())
    }, [])
    
    const handleDelete = (Id) => {
       dispatch(DeleteProduct(Id))
        .then(() => dispatch(getProduct()))
  
    };

    const edit = (productId) => {
        navigate(`/post/${productId}`)
    }
    const desc = (descId) => {
        navigate(`/description/${descId}`)
    }

    const addToCart = (productID) => {
        const existingCart = JSON.parse(localStorage.getItem('cart'));

        const isProductInCart = existingCart.find((i) => i.id === productID)
        if(!isProductInCart) {
            const isCard = products.find((product) => product.id === productID)
            existingCart.push(isCard);
            localStorage.setItem('cart', JSON.stringify(existingCart))
        } else {
            alert('Товар уже в корзине');
        }
    }
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    };
    
    const [product, setProduct] = useState('')
    const [values , setValues]= useState([])
    const hendlPorduct = () => {
        const inputValue =  product.toLowerCase()
        setValues(products.filter((product) => product.title.toLowerCase().startsWith(inputValue) )) 
        
    }

    return (
        <>
            <Main 
                products={products}  
                handleDelete= {handleDelete}  
                edit={edit} desc={desc} 
                addToCart={addToCart} 
               
                handleLogout={handleLogout}
                setProduct={setProduct}
                values={values}
                hendlPorduct={hendlPorduct}
            />
        </>
    );
};

export default MainContainer;