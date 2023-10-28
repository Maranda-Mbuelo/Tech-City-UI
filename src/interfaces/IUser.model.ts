import { ICart } from "./ICart.model";

export interface IUser extends IUserEdit{
    userID: string;
}

export interface IUserEdit{
    username: string;
    email: string;
    carts: ICart[];
}