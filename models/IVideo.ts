import { ICloudinaryImage } from "./ICloudinaryImage";
import { IPreviewImage } from "./IPreviewImage";

export interface IVideo {
    name: string;
    youTubeUrl: string;
    youkuUrl: string;
    chinaCacheFilename: string;
    internalHostingUrl: string;
    previewImage: IPreviewImage;
    cloudinaryVideo: ICloudinaryImage;

}