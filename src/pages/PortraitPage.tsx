import { useGalleryCollection } from '../features/galleryCollection';
import { portraitAlbum } from '../assets/s3Constants';

const PortraitPage = () => {
  const portraitGallery = useGalleryCollection(portraitAlbum);

  return (
    <>
      {portraitGallery}
    </>
  )
};

export default PortraitPage;