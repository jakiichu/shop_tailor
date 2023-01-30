import {BaseAuthUseCase} from "@domain/auth/common/use-case/base";
import {IRegistrationUseCase} from "@domain/auth/interfaces/use-case";
import {IRegistrationPort} from "@domain/auth/interfaces/registraion";
import {IRegistrationDto} from "@domain/auth/dto/registraion";

class RegistrationUseCase extends BaseAuthUseCase implements IRegistrationUseCase {
    public async execute(port:IRegistrationPort): Promise<IRegistrationDto> {
        return this._repository.registration(port)
    }
}

export {RegistrationUseCase}