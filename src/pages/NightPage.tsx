import { useGalleryCollection } from '../features/galleryCollection';
import { nightAlbum } from '../assets/s3Constants';

const StreetPage = () => {
  const portraitGallery = useGalleryCollection(nightAlbum);

  return (
    <>
      {portraitGallery}
    </>
  )
};

export default StreetPage;