import { useGalleryCollection } from '../features/galleryCollection';
import { portraitAlbum, streetAlbum } from '../services/s3/constants';

const PortraitPage = () => {
  const portraitGallery = useGalleryCollection(portraitAlbum);

  return (
    <>
      {portraitGallery}
    </>
  )
};

export default PortraitPage;