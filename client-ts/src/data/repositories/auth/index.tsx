import {IRegistrationPort} from "@domain/auth/interfaces";
import {HttpAppService} from "@data/common/services/http";
import {IRegistrationDto} from "@domain/auth/dto";

export const registration = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/registration', { body: port })
}

export const login = async (port: IRegistrationPort): Promise<IRegistrationDto> => {
    return await HttpAppService.post('/user/login', { body: port })

}

export const check = async (): Promise<IRegistrationDto> => {
    return await HttpAppService.get('/user/auth')

}


