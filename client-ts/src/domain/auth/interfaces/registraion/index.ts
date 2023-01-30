import {login} from "@data/repositories/auth";

interface IRegistrationPort {
    email: string
    password: string
}

interface ILoginPort {
    email: string
    password: string
}


export type { IRegistrationPort , ILoginPort }
