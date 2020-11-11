import { ICallToAction } from "./ICallToAction"
import { ICard } from "./ICard"
import { ICardSet } from "./ICardSet"
import { IHeading } from "./IHeading"
import { IImage } from "./IImage"
import { IPageHero } from "./IPageHero"
import { IPromotion } from "./IPromotion"
import { ISite } from "./ISite"
import { ITextBlock } from "./ITextBlock"
import { IUspSetArray } from "./IUspSetArray"
import { IVideoEntity } from "./IVideoEntity"

export interface IPage {
    callsToAction: ICallToAction[];
    cards: ICard[];
    cardSets: ICardSet[];
    name: string;
    headings: IHeading[];
    identifierToken: string;
    images: IImage[];
    metaDescription: string;
    site: ISite;
    textBlocks: ITextBlock[];
    title: string;
    videos: IVideoEntity[];
    promotion: IPromotion;
    pageHero: IPageHero;
    uspSetArray: IUspSetArray;
}

