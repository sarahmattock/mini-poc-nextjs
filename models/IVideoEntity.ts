import { IVideo } from "./IVideo";

export interface IVideoEntity {
    contentSlug: string;
    name: string;
    size: string;
    video: IVideo;
}