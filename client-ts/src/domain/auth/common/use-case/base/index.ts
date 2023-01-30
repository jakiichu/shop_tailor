import {IAuthRepository} from "@domain/auth/interfaces/repository";

class BaseAuthUseCase {
    protected readonly _repository: IAuthRepository

    constructor(repository: IAuthRepository) {
        this._repository = repository
    }
}

export { BaseAuthUseCase }