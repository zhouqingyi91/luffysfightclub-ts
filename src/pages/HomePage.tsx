import PageCollection from "../features/pageCollection";
import useApi from "../hooks/useApi";
import { homepageAlbum } from "../services/s3/constants"
import { fetchAlbumPhotos } from "../services/fetchAlbumPhotos";
import { isEmpty } from "../utils/isEmpty";
import LoadingIndicator from "../components/UI/LoadingIndicator";

type ImgDataType = {
  imgName: string,
  caption: string
}[]
let IMG_DATA: ImgDataType = [];
const HomePage = () => {
  console.log("HomePage render");

  const { data, isLoading } = useApi(fetchAlbumPhotos(homepageAlbum), IMG_DATA)

  if (isEmpty(IMG_DATA)) {
    IMG_DATA = data.map(({ imgName }) => {
      console.log("mapping data");
      return {
        imgName,
        caption: imgName.substring(imgName.indexOf('/') + 1, imgName.lastIndexOf('.'))
      }
    })
  }

  return (
    <article>
      <LoadingIndicator isLoading={isLoading} />
      <PageCollection imgs={IMG_DATA} />
    </article>
  );
};

export default HomePage;
