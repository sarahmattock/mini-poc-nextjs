import { ICallToAction } from "./ICallToAction"
import { IImage } from "./IImage"

export interface ICard {
    name: string;
        cardType: string;
        heading: string;
        image: IImage;
        instagramDisplayToken: string;
        copy: string;
        url: string;
        urlCta: string;
        icon: string;
        contentSlug: string;
        video: string;
        subHeading: string;
        callToAction: ICallToAction;
}