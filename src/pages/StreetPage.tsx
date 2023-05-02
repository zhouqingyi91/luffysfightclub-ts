import { useGalleryCollection } from '../features/galleryCollection';
import { streetAlbum } from '../assets/s3Constants';

const StreetPage = () => {
  const portraitGallery = useGalleryCollection(streetAlbum);

  return (
    <>
      {portraitGallery}
    </>
  )
};

export default StreetPage;