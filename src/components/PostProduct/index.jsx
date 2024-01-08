import React, { useState } from 'react';
import s from './styles.module.scss'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const schema = yup.
    object({
        title: yup.string().required('Поле обязательно'),
        description: yup.string().required('Поле обязательно'),
        price: yup.string().required('Поле обязательно').min(1, '').max(3, 'цена должна содержать не более 3 символов'),
    });

const PostProduckt = ({onSubmit, values, image, handleAddPhotoClick}) => {
    const {
        register,
        handleSubmit,
        formState :{errors},
    } = useForm({
        resolver: yupResolver(schema),
        values: values,
    })
    return (
        <>
            <div className={s.block}>
                <form  className={s.block__form}  onSubmit={handleSubmit(onSubmit)} >
                    <Link to={'/'}  className={s.block__btn}><button  type='button'>Отмена</button></Link>
                    <div className={s.block__check}>
                        <div onClick={handleAddPhotoClick} className={s.block__photo}>
                            {image ? <img className={s.img}  src={image} alt="" /> : 'Добавить фотографию'}
                        </div>
                        <div className={s.block__inp}>
                            <input className={s.inp} type="text"  placeholder='Введите название товара' {...register('title')}/>
                            <span className={s.post__error}>{errors?.title?.message}</span>
                            <input className={s.inp} type="text" placeholder='Введите описание товара' {...register('description')}/>
                            <span className={s.post__error}>{errors?.description?.message}</span>
                            <input className={s.inp} type="number" placeholder='Введите цену товара' {...register('price')}/>
                            <span className={s.post__error}>{errors?.price?.message}</span>
                        </div>
                    </div>
                    <div>
                       <button className={s.block__btn} type='submit'>Сохранить</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PostProduckt;