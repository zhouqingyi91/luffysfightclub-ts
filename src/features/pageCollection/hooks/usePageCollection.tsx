import LoadingIndicator from '../../../components/UI/LoadingIndicator';
import useApi from '../../../hooks/useApi';
import { fetchAlbumPhotos } from '../../../services/fetchAlbumPhotos';
import { isEmpty } from '../../../utils/isEmpty';
import PageCollection from '../components/PageCollection';

type ImgDataType = {
  imgName: string,
  caption: string
}
const pageImgData: {
  [index: string]: ImgDataType[]
} = {}
const usePageCollection = (album: string) => {
  const { data, isLoading } = useApi<ImgDataType[]>(fetchAlbumPhotos(album), pageImgData[album])

  if (isEmpty(pageImgData[album])) {
    pageImgData[album] = data?.map(({ imgName }) => {
      return {
        imgName,
        caption: imgName.substring(imgName.indexOf('/') + 1, imgName.lastIndexOf('.'))
      }
    })
  }

  return (
    <article>
      <LoadingIndicator isLoading={isLoading} />
      <PageCollection imgs={pageImgData[album]} />
    </article>
  );
};

export default usePageCollection;