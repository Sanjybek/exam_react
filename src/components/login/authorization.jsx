import React from 'react';
import s from './styles.module.scss'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom';

const shema = yup.object({
    username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(6, 'Не менее 6-х'),
})

const Authorization = ({onSubmit, setIsRegister}) => {
    const {
        register,
        handleSubmit,
        formState :{errors},
    } = useForm({
        resolver: yupResolver(shema)
    })
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}  className={s.wrapper}>
                <h1>Войти</h1>
                <label>
                    <input type="text" placeholder='user name' {...register('username')}/>
                    <span className={s.wrapper_error}>{errors?.useForm?.message}</span>

                </label>
                <label>
                    <input type="password"  placeholder='password' {...register('password')}/>
                    <span className={s.wrapper_error}>{errors?.password?.message}</span>
                </label>
                <button>Войти</button>
                <p>Нет аккаунта? Зарегистрируйтесь</p>
                <button type='button' onClick={() => setIsRegister(true)}>Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Authorization;