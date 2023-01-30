import {ILoginPort, IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {ICheckDto, IRegistrationDto} from "@domain/auth/dto/registraion";

interface IAuthRepository {
    registration(port:IRegistrationPort): Promise<IRegistrationDto>
    login(port:ILoginPort): Promise<IRegistrationDto>
    check():Promise<ICheckDto>
}
export type {IAuthRepository}