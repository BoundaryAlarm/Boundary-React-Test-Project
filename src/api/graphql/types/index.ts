export interface IUser {
    id: number,
    first_name: string,
    second_name: string,
    email_address: string,
    username: string,
    is_active: boolean
}

export interface IProduct {
    id: number,
    display_name: string,
    cost: number
}

export interface IPurchase {
    user_id: number,
    product_id: number,
    quantity: number;
}

export type TGetAllUsersResponse = {
    getUsers: IUser[]
}
