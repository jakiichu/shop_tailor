import {login} from "@data/repositories/auth";
import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {HttpAppService} from "@data/common/services/http";

const loginUseCase = async (port: IRegistrationPort) => {

    let {token} = await login(port)
    console.log(token)
    HttpAppService.setHeader('Authorization', `Bearer ${token}`)
    localStorage.setItem('token', token)


};

export default loginUseCase;