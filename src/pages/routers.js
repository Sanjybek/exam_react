import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";
import Header from "../components/Header/index.jsx";
import MainPage from "./MainPage/index.jsx";
import PostPage from "./ProductPage/index.jsx";
import DescriptionPage from "./decriptionPage/index.jsx";
import BascketPage from "./bascketPage/index.jsx";


export const router = createBrowserRouter ([
    {
        path: '/',
        element: ( 
            <>
                <Header/>
                <MainPage/>
            </>
        )

    },
    {
        path: '/login',
        element : <LoginPage/>

    },
    {
        path: '/post',
        element : <PostPage/>,

    },

    {
        path: '/post/:productID',
        element : <PostPage/>
    },
    {
        path: '/description/:descId',
        element : ( 
            <>
                <Header/>
                <DescriptionPage/>
            </>
        )
    },
    {
        path: '/bascket',
        element : ( 
            <>
                <Header/>
                <BascketPage/>
            </>
        )
    }
])