import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {IRegistrationDto} from "@domain/auth/dto/registraion";
import {authRepository} from "@data/repositories/auth";
import {RegistrationUseCase} from "@domain/auth/use-case/registraion";


const registrationRequest = (port: IRegistrationPort) => {
    const repository = new authRepository()
    const useCase = new RegistrationUseCase(repository)
    console.log(useCase)

}

export { registrationRequest }