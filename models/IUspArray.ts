import { IImage } from "./IImage";

export interface IUspArray {
    internalName: string;
    message: string;
    messageDescription: string;
    images: IImage[];
    accolades: string[],
}