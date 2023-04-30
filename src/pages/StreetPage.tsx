import { useGalleryCollection } from '../features/galleryCollection';
import { streetAlbum } from '../services/s3/constants';

const StreetPage = () => {
  const portraitGallery = useGalleryCollection(streetAlbum);

  return (
    <>
      {portraitGallery}
    </>
  )
};

export default StreetPage;