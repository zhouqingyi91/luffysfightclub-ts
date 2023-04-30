import { ApiInfoType } from "../hooks/useApi";

const fetchAlbumPhotosApi = 'fetchAlbumPhotosApi';
const fetchAlbumPhotosPath = '/s3/album';

export const fetchAlbumPhotos = (album: string): ApiInfoType => {
  return {
    api: fetchAlbumPhotosApi,
    path: fetchAlbumPhotosPath,
    params: { album }
  }
};
