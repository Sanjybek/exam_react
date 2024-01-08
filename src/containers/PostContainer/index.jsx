import React, { useEffect, useState } from 'react';
import PostProduckt from '../../components/PostProduct';
import { useDispatch, useSelector } from 'react-redux';
import { postsProdoct, putId } from '../../store/Product/actions';
import { useNavigate, useParams } from 'react-router-dom';
const PostContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {productID} = useParams()

    const products = useSelector(((state) => state.postsReducer.products))
    const product = products.find((i) => `${i.id}` === productID)

    const [image, setImage] = useState('')
    const [values, setValue] = useState({})

    useEffect(() => {
        if(productID) {
            setValue(product)
            setImage(product.image)
        } 
    },)

    const onSubmit =  (data) => {
        if(productID) {
            const obj = {
                ...data,
                image: image,
            }
            // Object.assign
            dispatch(putId({navigate, ...obj})) 
        } else {
            const obj = {
                ...data,
                image: image,
            }
            dispatch(postsProdoct({navigate,...obj}))
        }
        
    }
    const handleAddPhotoClick = () => {
            const imgValue = prompt('Введите URL фотографии');
            setImage(imgValue)
    };


    return (
        <>
            <PostProduckt  values={values} handleAddPhotoClick={handleAddPhotoClick} image={image}  onSubmit={onSubmit} />     
        </>
    );
};

export default PostContainer;