import {registration} from "@data/repositories/auth";
import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {HttpAppService} from "@data/common/services/http";

const registrationUseCase = async (port: IRegistrationPort) => {

    let {token} = await registration(port)
    HttpAppService.setHeader('Authorization', `Bearer ${token}`)
    localStorage.setItem('token', token)


};

export default registrationUseCase;