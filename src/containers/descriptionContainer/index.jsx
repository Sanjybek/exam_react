import React, { useEffect, useState } from 'react';
import Description from '../../components/description';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { descProduct } from '../../store/Product/actions';
import {  Spin } from 'antd';
const DescriptionContainer = () => {
    const {descId} = useParams()
    const dispatch = useDispatch()
    
    const product = useSelector((state) => state.postsReducer.product)
    const isLoad = useSelector((state) => state.postsReducer.isLoad)

     useEffect(() => {
        dispatch(descProduct(descId))
     }, [])
     
    return (
        <>
            <Spin tip='Loading' spinning={isLoad}>
                <Description  product={product}/>
            </Spin>
        </>
    );
};

export default DescriptionContainer;