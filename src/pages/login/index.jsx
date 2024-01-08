import { useEffect, useState } from "react"
import { Authorization, Registration } from "../../components/login"
import { useDispatch, useSelector } from "react-redux"
import { loginAction, registerAction } from "../../store/login/actions"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoad, error } = useSelector((state) => state.loginReducer)

    const [isRegister, setIsRegister] = useState(false)
    const onSubmit = (data) => {
        if(isRegister) {
            dispatch(registerAction({
                    username: data.username,
                    password: data.password
                }));
        } else {
            dispatch(loginAction({navigate, ...data}))
        }

    }
    return (isRegister) ? <Registration onSubmit={onSubmit} setIsRegister={setIsRegister}/> 
    : <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister}/>
}
            
       
export default LoginPage