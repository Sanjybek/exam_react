import React, { useState } from 'react';
import Bascket from '../../components/bascket';

const BascetContainer = () => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    
    const delet = (id) => {
        const deleteId = data.filter((card) => card.id !== id)
        localStorage.setItem('cart', JSON.stringify(deleteId))
        setData(deleteId)
    }
    const deletBascet = () => {
        setData([])
    }
    return (
        <>
            <Bascket deletBascet={deletBascet} delet={delet} data={data}/> 
        </>
    );
};

export default BascetContainer;