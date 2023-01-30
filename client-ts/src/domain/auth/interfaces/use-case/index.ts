
import {ILoginPort, IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {ILoginDto, IRegistrationDto} from "@domain/auth/dto/registraion";
import {IUseCase} from "@domain/common";

type IRegistrationUseCase = IUseCase<IRegistrationPort, IRegistrationDto>
type ILoginUseCase = IUseCase<ILoginPort, ILoginDto>

export type{
    IRegistrationUseCase,
    ILoginUseCase
}