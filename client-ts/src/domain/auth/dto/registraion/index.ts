interface ITokenDto {
    token: string
    message?:string
}
type IRegistrationDto = ITokenDto
type ILoginDto = ITokenDto
type ICheckDto = ITokenDto



export type { IRegistrationDto,ILoginDto,ICheckDto }