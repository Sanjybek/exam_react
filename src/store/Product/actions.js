import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstans} from "../../api";

export const postsProdoct = createAsyncThunk(
    'product/postsProdoct',
    async ({navigate, ...data}, thunkAPI) => {
        try {
            await axiosInstans.post('product/', data);
            navigate('/')
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при создании товара!')
        }
    }
)

export const getProduct = createAsyncThunk(
    'product/getProduct',
    async (thunkAPI) => {
        try {
            const response = await axiosInstans.get('product/');
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!')
        }
    }
)
export const DeleteProduct = createAsyncThunk(
    'product/DeleteProduct',
    async ( id, thunkAPI) => {
        try {
            await axiosInstans.delete(`product/${id}`);  
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при удалении товара!')
        }
    }
)
export const putId = createAsyncThunk(
    'product/putId',
    async ({navigate, ...data}, thunkAPI) => {
        try {
            await axiosInstans.put(`product/${data.id}/`, data); 
            navigate('/')           
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при редактировнии!')
        }
    }
)

export const descProduct = createAsyncThunk(
    'product/descProduct',
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstans.get(`product/${id}/`);
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при загрузе товаров!')
        }
    }
)
