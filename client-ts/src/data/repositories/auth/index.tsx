import {ILoginPort, IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {HttpAppService} from "@data/common/services/http";
import {ICheckDto, ILoginDto, IRegistrationDto} from "@domain/auth/dto/registraion";
import {IAuthRepository} from "@domain/auth/interfaces/repository";

export const registration = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/registration', { body: port })
}

export const login = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/login', { body: port })

}

export const check = async (): Promise<IRegistrationDto> => {
    return await HttpAppService.get('/user/auth')
}

class authRepository implements IAuthRepository{
    async registration(port: IRegistrationPort): Promise<IRegistrationDto> {
        return await HttpAppService.post('/user/registration', { body: port })
    }
    async login(port:ILoginPort): Promise<ILoginDto>{
        return await HttpAppService.post('/user/login',{body: port})
    }
    async check(): Promise<ICheckDto>{
        return await HttpAppService.get('/user/auth')
    }
}
export {authRepository}

