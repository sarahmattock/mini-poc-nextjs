import { IImage } from "./IImage";

export interface IPageHero {
    contentSlug: string;
    name:  string;
    text:  string;
    heading:  string;
    sideImage: IImage,
    image: IImage;
}