import { useEffect, useMemo, useState } from 'react';
import LoadingIndicator from '../../../components/UI/LoadingIndicator';
import useApi from '../../../hooks/useApi';
import { useAppDispatch } from '../../../hooks/useRedux';
import { fetchAlbumPhotos } from '../../../services/fetchAlbumPhotos';
import { isEmpty } from '../../../utils/isEmpty';
import GalleryCollection from '../components/GalleryCollection';
import { ImgDataType, setGalleryImgData } from '../store/galleryDataSlice';

const galleryImgData: {
  [index: string]: ImgDataType[]
} = {}
const useGalleryCollection = (album: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useApi<ImgDataType[]>(fetchAlbumPhotos(album), galleryImgData[album])
  if (isEmpty(galleryImgData[album])) {
    galleryImgData[album] = data;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])

  useEffect(() => {
    dispatch(setGalleryImgData(data))
  }, [data]);

  return (
    <article>
      <LoadingIndicator isLoading={isLoading} />
      <GalleryCollection />
    </article>
  );
};

export default useGalleryCollection;