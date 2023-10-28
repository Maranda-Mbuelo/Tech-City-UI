import { IUser } from "./IUser.model";

export interface ICart{
    cartID: string;
    ownerUserID: string;
    owner: IUser;
    productID: string;
}