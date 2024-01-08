import React from 'react';
import s from './styles.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const shema = yup.object({
    username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(6, 'Не более 6-ти'),
    confirmpassword: yup.string().required('Поле обязательно').min(6, 'Не более 6-ти')
    .test('passwords-match', 'Пароли должны совподать', function (value) {
        return this.parent.password === value
    })
})

const Registration = ({onSubmit,setIsRegister}) => {
    const {
        register,
        handleSubmit,
        formState :{errors},
    } = useForm({
        resolver: yupResolver(shema)
    })

    return (
        <form  onSubmit={handleSubmit(onSubmit)} className={s.wrapper}>
            <h1>Регистрация</h1>
            <label>
                <input type="text" placeholder='user name' {...register('username')}/>
                <span className={s.wrapper_error}>{errors?.useForm?.message}</span>
            </label>
            <label>
                <input type="text" placeholder='password' {...register('password')}/>
                <span className={s.wrapper_error}>{errors?.password?.message}</span>
            </label>
            <label>
                <input type="text" placeholder='confirm password' {...register('confirmpassword')}/>
                <span className={s.wrapper_error}>{errors?.confirmpassword?.message}</span>
            </label>
            <button>Зарегистрировать</button>
            <p>Есть аккаунт? Войдите</p>
            <button type='button' onClick={() => setIsRegister(false)}>Войти</button>
        </form>
    );
};

export default Registration;