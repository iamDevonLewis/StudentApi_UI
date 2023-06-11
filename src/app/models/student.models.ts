import { Address } from "./address.model";
import { Gender } from "./gender.model";

export interface Student{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: number,
    dateOfbBirth: string,
    imageUrl: string,
    genderId: string,
    gender: Gender,
    address: Address


}