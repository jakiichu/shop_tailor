import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {HttpAppService} from "@data/common/services/http";
import {IRegistrationDto} from "@domain/auth/dto/registraion";

export const registration = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/registration', { body: port })
}

export const login = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/login', { body: port })

}

export const check = async (): Promise<IRegistrationDto> => {
    return await HttpAppService.get('/user/auth')

}


