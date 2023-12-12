import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./login";

export const router = createBrowserRouter ([
    {
        path: '',
        element : <div>Home</div>

    },
    {
        path: '/login',
        element : <LoginPage/>

    }
])