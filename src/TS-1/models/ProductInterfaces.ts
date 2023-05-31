export interface ProductInterfaces {
    id: number,
    username: string,
    email: string,
    address: AddresInterface
}
export interface AddresInterface {
    street: string,
    city: string
}