import { useState } from "react"
import { Authorization, Registration } from "../../components/login"

const LoginPage = () => {
    const [isRegister, setIsRegister] = useState(false)
    const onSubmit = (data) => {
        if(isRegister) {
            console.log(data, 'регистрация');
        } else {
            console.log(data, 'авторизация');
        }

    }
    if(isRegister) return <Registration onSubmit={onSubmit} setIsRegister={setIsRegister}/> 
    return   <Authorization onSubmit={onSubmit} setIsRegister={setIsRegister}/>
}
            
       
export default LoginPage