import { ICard } from "./ICard";

export interface ICardSet {
    contentSlug: string;
    name: string;
    cards: ICard[];
}