import {registration} from "@data/repositories/auth";
import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {HttpAppService} from "@data/common/services/http";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const useRegistrationUseCase = async (port:IRegistrationPort) => {

    let {token, message} = await registration(port)

    const navigate = useNavigate()
    console.log(message)
    HttpAppService.setHeader('Authorization', `Bearer ${token}`)
    localStorage.setItem('token', token);

    useEffect(()=>{
        if (token){
            navigate('/')
        }

    },[token])

};

export default useRegistrationUseCase;